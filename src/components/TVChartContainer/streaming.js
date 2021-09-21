
import { parseFullSymbol } from './helpers.js';
const channelToSubscription = new Map();
const apikey = 'a290bba86364cb449bcb03fc25db8366d8b181ab4332c3a876971c2e89c15623';
const socket = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apikey);
const ant_socket = new WebSocket('wss://stream.anteagle.tech')

// socket.on('connect', () => {
//     //console.log('[socket] Connected');
// });

// socket.on('disconnect', (reason) => {
//     //console.log('[socket] Disconnected:', reason);
// });

// socket.on('error', (error) => {
//     //console.log('[socket] Error:', error);
// });
function getNextDailyBarTime(barTime) {
    const date = new Date(barTime * 1000);
    date.setDate(date.getDate() + 1);
    return date.getTime() / 1000;
}
ant_socket.onmessage = event => {
    var data = JSON.parse(event.data)
    const exchange = "AntEagle"
    const fromSymbol = 'ANTEAG'
    const toSymbol = data.curr
    const tradeTimeStr = data.time
    const tradePriceStr = data.price
    const tradePrice = parseFloat(tradePriceStr);
    const tradeTime = parseInt(tradeTimeStr);
    const channelString = `0~${exchange}~${fromSymbol}~${toSymbol}`;
    const subscriptionItem = channelToSubscription.get(channelString);
    // console.log(subscriptionItem)
    if (subscriptionItem === undefined) {
        return;
    }
    const lastDailyBar = subscriptionItem.lastDailyBar;
    const nextDailyBarTime = getNextDailyBarTime(lastDailyBar.time);

    let bar;
    if (tradeTime >= nextDailyBarTime) {
        bar = {
            time: nextDailyBarTime,
            open: tradePrice,
            high: tradePrice,
            low: tradePrice,
            close: tradePrice,
        };
        //console.log('[socket] Generate new bar', bar);
    } else {
        bar = {
            ...lastDailyBar,
            high: Math.max(lastDailyBar.high, tradePrice),
            low: Math.min(lastDailyBar.low, tradePrice),
            close: tradePrice,
        };
        //console.log('[socket] Update the latest bar by price', tradePrice);
    }
    subscriptionItem.lastDailyBar = bar;
    // send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach(handler => handler.callback(bar));
}
socket.onmessage =  event => {
    var data = JSON.parse(event.data)
    // console.log("sdddddddddddddddddddddddd")
    // console.log('[socket] Message:', data);
    
       const eventTypeStr = data.F
       const   exchange = data.M
       const   fromSymbol = data.FSYM
       const  toSymbol = data.TSYM
        const  tradeTimeStr = data.TS
        const  tradePriceStr = data.P

  
    const tradePrice = parseFloat(tradePriceStr);
    const tradeTime = parseInt(tradeTimeStr);
    const channelString = `0~${exchange}~${fromSymbol}~${toSymbol}`;
    const subscriptionItem = channelToSubscription.get(channelString);
    // console.log(subscriptionItem)
    if (subscriptionItem === undefined) {
        return;
    }
    const lastDailyBar = subscriptionItem.lastDailyBar;
    const nextDailyBarTime = getNextDailyBarTime(lastDailyBar.time);

    let bar;
    if (tradeTime >= nextDailyBarTime) {
        bar = {
            time: nextDailyBarTime,
            open: tradePrice,
            high: tradePrice,
            low: tradePrice,
            close: tradePrice,
        };
        //console.log('[socket] Generate new bar', bar);
    } else {
        bar = {
            ...lastDailyBar,
            high: Math.max(lastDailyBar.high, tradePrice),
            low: Math.min(lastDailyBar.low, tradePrice),
            close: tradePrice,
        };
        //console.log('[socket] Update the latest bar by price', tradePrice);
    }
    subscriptionItem.lastDailyBar = bar;
    // send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach(handler => handler.callback(bar));
}
export function subscribeOnStream(
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback,
    lastDailyBar
) {
    const parsedSymbol = parseFullSymbol(symbolInfo.full_name);
    const channelString = `0~${parsedSymbol.exchange}~${parsedSymbol.fromSymbol}~${parsedSymbol.toSymbol}`;
    const handler = {
        id: subscribeUID,
        callback: onRealtimeCallback,
    };
    let subscriptionItem = channelToSubscription.get(channelString);
    if (subscriptionItem) {
        // already subscribed to the channel, use the existing subscription
        subscriptionItem.handlers.push(handler);
        return;
    }
    subscriptionItem = {
        subscribeUID,
        resolution,
        lastDailyBar,
        handlers: [handler],
    };
    channelToSubscription.set(channelString, subscriptionItem);
    //console.log('[subscribeBars]: Subscribe to streaming. Channel:', channelString);
    var subRequest = {
        "action": "SubAdd",
        "subs": [channelString]
    }
    if(parsedSymbol.exchange === "AntEagle"){
        ant_socket.send("antdata");
    }
    socket.send(JSON.stringify(subRequest))
}

export function unsubscribeFromStream(subscriberUID) {

    // find a subscription with id === subscriberUID
    for (const channelString of channelToSubscription.keys()) {
        const subscriptionItem = channelToSubscription.get(channelString);
        const handlerIndex = subscriptionItem.handlers
            .findIndex(handler => handler.id === subscriberUID);

        if (handlerIndex !== -1) {
            // remove from handlers
            subscriptionItem.handlers.splice(handlerIndex, 1);

            if (subscriptionItem.handlers.length === 0) {
                // unsubscribe from the channel, if it was the last handler
                //console.log('[unsubscribeBars]: Unsubscribe from streaming. Channel:', channelString);
                var subRequest = {
                    "action": "SubRemove",
                    "subs": [channelString]
                }
                socket.send(JSON.stringify(subRequest))
                channelToSubscription.delete(channelString);
                break;
            }
        }
    }
}


