import axios from 'axios';
import { makeApiRequest,parseFullSymbol, generateSymbol } from './helpers.js';
import { subscribeOnStream, unsubscribeFromStream } from './streaming.js';

const lastBarsCache = new Map();
async function getAllSymbols() {
    const data = await makeApiRequest('data/v3/all/exchanges');
    //console.log(data)
    let allSymbols = [];

    for (const exchange of configurationData.exchanges) {
        const pairs = data.Data[exchange.value].pairs;
//console.log(pairs)
        for (const leftPairPart of Object.keys(pairs)) {
            const symbols = pairs[leftPairPart].map(rightPairPart => {
                const symbol = generateSymbol(exchange.value, leftPairPart, rightPairPart);
                return {
                    symbol: symbol.short,
                    full_name: symbol.full,
                    description: symbol.short,
                    exchange: exchange.value,
                    type: 'crypto',
                };
            });
            
            // //console.log(symbols)
            allSymbols = [...allSymbols, ...symbols];
        }
    }
    var temp = {'ANTEAG' : ['USDT','INRD']}
    const symbols1  = temp['ANTEAG'].map(rightPairPart=>{
        const symbol = generateSymbol('AntEagle','ANTEAG',rightPairPart);
        return {
            symbol: symbol.short,
            full_name: symbol.full,
            description: symbol.short,
            exchange: 'AntEagle',
            type: 'crypto',
        }
    })
    allSymbols = [...allSymbols,...symbols1]
    return allSymbols;
}
const configurationData = {
    supported_resolutions: ['1m','5m','10m','1h','2h','4h','1D','1W'],
    exchanges: [
        {
            value: 'Bitfinex',
            name: 'Bitfinex',
            desc: 'Bitfinex',
        },
        {
            // `exchange` argument for the `searchSymbols` method, if a user selects this exchange
            value: 'Binance',

            // filter name
            name: 'Binance',

            // full exchange name displayed in the filter popup
            desc: 'Binance',
        },
    ],
    symbols_types: [
        {
            name: 'crypto',

            // `symbolType` argument for the `searchSymbols` method, if a user selects this symbol type
            value: 'crypto',
        },
  
    ],
};

export default {
    onReady: (callback) => {
        //console.log('[onReady]: Method call');
        setTimeout(() => callback(configurationData));
    },
    searchSymbols: async (
        userInput,
        exchange,
        symbolType,
        onResultReadyCallback
    ) => {
        //console.log('[searchSymbols]: Method call');
        const symbols = await getAllSymbols();
        const newSymbols = symbols.filter(symbol => {
            const isExchangeValid = exchange === '' || symbol.exchange === exchange;
            const isFullSymbolContainsInput = symbol.full_name
                .toLowerCase()
                .indexOf(userInput.toLowerCase()) !== -1;
            return isExchangeValid && isFullSymbolContainsInput;
        });
        onResultReadyCallback(newSymbols);
    },
    resolveSymbol: async (
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback
    ) => {
        //console.log('[resolveSymbol]: Method call', symbolName);
        const symbols = await getAllSymbols();
        const symbolItem = symbols.find(({ full_name }) => full_name === symbolName);
        if (!symbolItem) {
            //console.log('[resolveSymbol]: Cannot resolve symbol', symbolName);
            onResolveErrorCallback('cannot resolve symbol');
            return;
        }
        const symbolInfo = {
            ticker: symbolItem.full_name,
            name: symbolItem.symbol,
            description: symbolItem.description,
            type: symbolItem.type,
            session: '24x7',
            timezone: 'Etc/UTC',
            exchange: symbolItem.exchange,
            minmov: 1,
            pricescale: 100,
            has_intraday: false,
            has_no_volume: true,
            has_weekly_and_monthly: false,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 2,
            data_status: 'streaming',
        };

        //console.log('[resolveSymbol]: Symbol resolved', symbolName);
        onSymbolResolvedCallback(symbolInfo);
    },
    getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
        const { from, to, firstDataRequest } = periodParams;
        //console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
        // console.log(symbolInfo,resolution,from,to)
        if(symbolInfo.name == 'ANTEAG/USDT' || symbolInfo.name == 'ANTEAG/INRD'){
            var temp = await axios({
                method:"get",
                url : 'https://streamer.anteagle.tech/bars?interval=1440&ts=97897',
            })
            // console.log(data)
            let bars = []
            temp.data.forEach(bar=>{
                bars = [...bars,{
                    time:bar[0]*1000,
                    open:bar[1],
                    high:bar[2],
                    low:bar[3],
                    close:bar[4]
                }]
            })
            // console.log(bars)s
            onHistoryCallback(bars, { noData: false });
        }
        else{
            const parsedSymbol = parseFullSymbol(symbolInfo.full_name);
            const urlParameters = {
                e: parsedSymbol.exchange,
                fsym: parsedSymbol.fromSymbol,
                tsym: parsedSymbol.toSymbol,
                toTs: to,
                limit: 2000,
            };
    
            const query = Object.keys(urlParameters)
                .map(name => `${name}=${encodeURIComponent(urlParameters[name])}`)
                    .join('&');
            try {
                const data = await makeApiRequest(`data/histoday?${query}`);
                if (data.Response && data.Response === 'Error' || data.Data.length === 0) {
                    // "noData" should be set if there is no data in the requested period.
                    onHistoryCallback([], { noData: true });
                    return;
                }
                let bars = [];
                // console.log(data.Data)
                data.Data.forEach(bar => {
                    if (bar.time >= from && bar.time < to) {
                        bars = [...bars, {
                            time: bar.time * 1000,
                            low: bar.low,
                            high: bar.high,
                            open: bar.open,
                            close: bar.close,
                        }];
                    }
                });
                if (firstDataRequest) {
                    lastBarsCache.set(symbolInfo.full_name, { ...bars[bars.length - 1] });
                }
                //console.log(`[getBars]: returned ${bars.length} bar(s)`);
                onHistoryCallback(bars, { noData: false });
            } catch (error) {
                //console.log('[getBars]: Get error', error);
                onErrorCallback(error);
            }
        }
        
    },
    subscribeBars: (
        symbolInfo,
        resolution,
        onRealtimeCallback,
        subscribeUID,
        onResetCacheNeededCallback
    ) => {
        //console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID);
        subscribeOnStream(
            symbolInfo,
            resolution,
            onRealtimeCallback,
            subscribeUID,
            onResetCacheNeededCallback,
            lastBarsCache.get(symbolInfo.full_name)
        );
    },

    unsubscribeBars: (subscriberUID) => {
        //console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
        unsubscribeFromStream(subscriberUID);
    },
};