import * as React from 'react';
import './index.css';
import {widget as wi} from '../../charting_library'
import Datafeed from './datafeed.js';
import { useEffect } from 'react';
function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
 export const TVChartContainer = (props) => {
	const defaultProps = {
		symbol: props.pair,
		interval: 'D',
		containerId: 'tv_chart_container',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: true,
		autosize: true,
		datafeedUrl : Datafeed,
		studiesOverrides: {},
		theme: props.theme,
		
	};



	useEffect(()=>{
		const widgetOptions = {
			symbol: defaultProps.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: Datafeed,
			interval: defaultProps.interval,
			container_id: defaultProps.containerId,
			library_path: defaultProps.libraryPath,
			theme:defaultProps.theme,
			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: defaultProps.chartsStorageUrl,
			charts_storage_api_version: defaultProps.chartsStorageApiVersion,
			client_id: defaultProps.clientId,
			user_id: defaultProps.userId,
			fullscreen: defaultProps.fullscreen,
			autosize: defaultProps.autosize,
			studies_overrides: defaultProps.studiesOverrides,
		};
 
		const tvWidget = new wi(widgetOptions);
	

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'TradingView Charting Library API works correctly',
					callback: () => {
						console.log('Noticed!');
					},
				}));

				button.innerHTML = 'Check API';
			});
		});
	},[props.pair,props.theme])
		
	

	return (
			<div
				id={ defaultProps.containerId }
				className={ 'TVChartContainer' }
			/>
		);
	
	}
