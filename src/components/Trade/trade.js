import React,{useState} from 'react';
import Aside from "../Layout/Aside/aside";
import { Link } from 'react-router-dom';
import {MdKeyboardArrowLeft,MdKeyboardArrowDown,MdKeyboardArrowRight} from "react-icons/md"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';



const  Trade = props => {

const [activeTab,setActiveTab] = useState(0)

    const handleTab = (index) => {
        setActiveTab(index)
    }
    return (
        <div>
            <Aside/>
        <main
            className="v-content"
            data-booted="true"
            style={{padding: "64px 0px 32px 225px"}}
        >
            <div className="v-content__wrap">
                <div className="container fluid grid-list-md pa-2">
                    <div className="layout wrap">
                        <div className="flex d-flex xs12 lg8 xl9">
                            <div
                                className="v-card--core hide-overflow v-card theme--light"
                                style={{ minHeight: 420, position: "relative" }}
                            >
                                {/**/}{" "}
                                <div
                                    className="layout align-center fill-height justify-center title wrap"
                                >
                                    <div data-v-15c92755 id="trade-view">
                                        <TradingViewWidget
                                            symbol="NASDAQ:AAPL"
                                            id="tradingview_1b14a"
                                            name="tradingview_1b14a"
                                            theme={Themes.LIGHT}
                                            locale="en"
                                            autosize
                                            allowTransparency="true"
                                            scrolling="no"
                                            allowFullScreen
                                            hide_side_toolbar={false}
                                           // style={{ display: "block", width: "100%", height: "100%" }}
                                        />
                                     {/*   <iframe
                                            id="tradingview_1b14a"
                                            name="tradingview_1b14a"
                                            src={"../../public/library/charting_library/static/en-tv-chart.1c7535a2aac5ec511ed5.html#symbol=HALO%2FETH&interval=15&widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%22W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%22W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&locale=en&uid=tradingview_1b14a&clientId=www.halodex.io&userId=0&chartsStorageVer=1.0&debug=false&timezone=America%2FNew_York&theme=Light"}
                                            frameBorder={0}
                                            allowTransparency="true"
                                            scrolling="no"
                                            allowFullScreen
                                            style={{ display: "block", width: "100%", height: "100%" }}
                                        />*/}
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex d-flex xs12 lg4 xl3">
                            <div
                                className="v-card--core hide-overflow v-card theme--light"
                                style={{ height: "100%" }}
                            >
                                {/**/}{" "}
                                <div data-v-64a9250c>
                                    <div
                                        className="v-item-group elevation-0 pa-1 theme--light v-btn-toggle v-btn-toggle--only-child v-btn-toggle--selected"
                                        full-width
                                    >
                                        <button
                                            type="button"
                                            value="allTrades"
                                            className={activeTab === 0 ? "text-capitalize mr-2 v-btn accent v-btn--active white--text v-btn--flat theme--light" : "text-capitalize mr-2 v-btn v-btn--flat theme--light"}
                                            style={{ minWidth: 104 }}
                                            onClick={ () => handleTab(0)}
                                        >
                                            <div className="v-btn__content">All Trades</div>
                                        </button>
                                        <button
                                            type="button"
                                            value="myTrades"
                                            className={activeTab === 1 ? "text-capitalize mr-2 v-btn accent v-btn--active white--text v-btn--flat theme--light" : "text-capitalize mr-2 v-btn v-btn--flat theme--light"}
                                            style={{ minWidth: 104 }}
                                            onClick={ () => handleTab(1)}
                                        >
                                            <div className="v-btn__content">My Trades</div>
                                        </button>
                                    </div>{" "}
                                    <hr className="v-divider theme--light" />
                                </div>{" "}
                                <div
                                    data-v-64a9250c
                                    className="scroll-y"
                                    style={{ overflowX: "hidden", maxHeight: 527 }}
                                >
                                    <div data-v-64a9250c className="v-data-table--dense">
                                        <div className="v-table__overflow">
                                            <table className="v-datatable v-table theme--light">
                                                <thead>
                                                <tr>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="Price (ETH): Not sorted."
                                                        aria-sort="none"
                                                        className="column text-xs-right"
                                                    >
                                                        Price (ETH)
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="Amount (DBET): Not sorted."
                                                        aria-sort="none"
                                                        className="column text-xs-right"
                                                    >
                                                        Amount (DBET)
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="Time: Not sorted."
                                                        aria-sort="none"
                                                        className="column text-xs-right"
                                                    >
                                                        Time
                                                    </th>
                                                </tr>
                                                <tr className="v-datatable__progress">
                                                    <th colSpan={3} className="column" />
                                                </tr>
                                                </thead>
                                                {activeTab === 0 && (
                                                <tbody>





                                                <tr data-v-64a9250c className="trade-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000058</td>{" "}
                                                    <td data-v-64a9250c>177.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        18:18:13
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000081</td>{" "}
                                                    <td data-v-64a9250c>1,500.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        17:22:24
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="trade-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000058</td>{" "}
                                                    <td data-v-64a9250c>177.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        17:00:49
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000079</td>{" "}
                                                    <td data-v-64a9250c>103,178.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        14:01:12
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000079</td>{" "}
                                                    <td data-v-64a9250c>75,056.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        13:11:29
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000078</td>{" "}
                                                    <td data-v-64a9250c>115,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        13:09:30
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000077</td>{" "}
                                                    <td data-v-64a9250c>147,800.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        13:09:29
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000074</td>{" "}
                                                    <td data-v-64a9250c>263,360.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        13:09:29
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000072</td>{" "}
                                                    <td data-v-64a9250c>158,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        13:09:28
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000070</td>{" "}
                                                    <td data-v-64a9250c>62,768.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        13:09:28
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000069</td>{" "}
                                                    <td data-v-64a9250c>36,082.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        13:09:28
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="trade-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000058</td>{" "}
                                                    <td data-v-64a9250c>177.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        11:58:33
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000070</td>{" "}
                                                    <td data-v-64a9250c>35,470.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Apr 01 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000069</td>{" "}
                                                    <td data-v-64a9250c>1,174,978.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Apr 01 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000068</td>{" "}
                                                    <td data-v-64a9250c>322,747.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Apr 01 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000067</td>{" "}
                                                    <td data-v-64a9250c>35,722.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Apr 01 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000067</td>{" "}
                                                    <td data-v-64a9250c>400,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Apr 01 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000068</td>{" "}
                                                    <td data-v-64a9250c>50,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 31 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="trade-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000056</td>{" "}
                                                    <td data-v-64a9250c>178.58000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 30 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000069</td>{" "}
                                                    <td data-v-64a9250c>25,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 30 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000068</td>{" "}
                                                    <td data-v-64a9250c>50,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 30 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000067</td>{" "}
                                                    <td data-v-64a9250c>150,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 30 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000067</td>{" "}
                                                    <td data-v-64a9250c>50,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 30 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000067</td>{" "}
                                                    <td data-v-64a9250c>200,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 30 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000068</td>{" "}
                                                    <td data-v-64a9250c>225,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 29 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000068</td>{" "}
                                                    <td data-v-64a9250c>50,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 29 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000068</td>{" "}
                                                    <td data-v-64a9250c>50,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 29 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000068</td>{" "}
                                                    <td data-v-64a9250c>50,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 29 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="trade-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000060</td>{" "}
                                                    <td data-v-64a9250c>1,639,833.33100000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 25 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="trade-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000070</td>{" "}
                                                    <td data-v-64a9250c>212,857.14100000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 25 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="trade-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000070</td>{" "}
                                                    <td data-v-64a9250c>142.85900000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 24 2020
                                                    </td>
                                                </tr>
                                                <tr data-v-64a9250c className="buy-sell text-xs-right">
                                                    <td data-v-64a9250c>0.00000078</td>{" "}
                                                    <td data-v-64a9250c>160,000.00000000</td>{" "}
                                                    <td data-v-64a9250c className="text-xs-right">
                                                        Mar 24 2020
                                                    </td>
                                                </tr>

                                                </tbody> )}
                                                {activeTab === 1 && (
                                                <tbody className="__web-inspector-hide-shortcut__">
                                                <tr>
                                                    <td colSpan="3" className="text-xs-center">Please login to view your
                                                        trades
                                                    </td>
                                                </tr>
                                                </tbody>
                                                )}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex d-flex xs12 lg7 xl8">
                            <div
                                className="v-card--core hide-overflow v-card--order-book v-card theme--light"
                                id="helper"
                            >
                                {/**/}{" "}
                                <div className="container d-flex fluid pa-0 fill-height">
                                    <div className="layout ma-0">
                                        <div className="flex xs12 md6 pa-0">
                                            <div className="scroll-y" style={{ height: 375 }}>
                                                <div className="v-data-table--dense">
                                                    <div className="v-table__overflow">
                                                        <table className="v-datatable v-table theme--light">
                                                            <thead>
                                                            <tr>
                                                                <th
                                                                    role="columnheader"
                                                                    scope="col"
                                                                    aria-label="Amount (DBET): Not sorted."
                                                                    aria-sort="none"
                                                                    className="column text-xs-right"
                                                                >
                                                                    Amount (DBET)
                                                                </th>
                                                                <th
                                                                    role="columnheader"
                                                                    scope="col"
                                                                    aria-label="Total (DBET): Not sorted."
                                                                    aria-sort="none"
                                                                    className="column text-xs-right"
                                                                >
                                                                    Total (DBET)
                                                                </th>
                                                                <th
                                                                    role="columnheader"
                                                                    scope="col"
                                                                    aria-label="Price (ETH): Not sorted."
                                                                    aria-sort="none"
                                                                    className="column text-xs-right"
                                                                >
                                                                    Price (ETH)
                                                                </th>
                                                            </tr>
                                                            <tr className="v-datatable__progress">
                                                                <th colSpan={3} className="column" />
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr className="text-xs-right">
                                                                <td className id="buyOrderBaseMeasure">
                                                                    450.00000000
                                                                </td>{" "}
                                                                <td>450.00000000</td>{" "}
                                                                <td>
                                                                    <Link to="#" className="buy">
                                                                        0.00000300
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        <div className="flex pa-0 hidden-sm-and-down">
                                            <hr className="grey darken-2 px-1 v-divider v-divider--vertical theme--light" />
                                        </div>{" "}
                                        <div className="flex xs12 md6 pa-0">
                                            <div className="scroll-y" style={{ height: 375 }}>
                                                <div className="v-data-table--dense">
                                                    <div className="v-table__overflow">
                                                        <table className="v-datatable v-table theme--light">
                                                            <thead>
                                                            <tr>
                                                                <th
                                                                    role="columnheader"
                                                                    scope="col"
                                                                    aria-label="Price (ETH): Not sorted."
                                                                    aria-sort="none"
                                                                    className="column text-xs-right"
                                                                >
                                                                    Price (ETH)
                                                                </th>
                                                                <th
                                                                    role="columnheader"
                                                                    scope="col"
                                                                    aria-label="Total (DBET): Not sorted."
                                                                    aria-sort="none"
                                                                    className="column text-xs-right"
                                                                >
                                                                    Total (DBET)
                                                                </th>
                                                                <th
                                                                    role="columnheader"
                                                                    scope="col"
                                                                    aria-label="Amount (DBET): Not sorted."
                                                                    aria-sort="none"
                                                                    className="column text-xs-right"
                                                                >
                                                                    Amount (DBET)
                                                                </th>
                                                            </tr>
                                                            <tr className="v-datatable__progress">
                                                                <th colSpan={3} className="column" />
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr className="text-xs-right">
                                                                <td className id="sellOrderBaseMeasure">
                                                                    <Link to="#" className="sell">
                                                                        0.00002950
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>20,000.00000000</td> <td>20,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00003000
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>21,549.00000000</td> <td>1,549.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00003600
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>41,549.00000000</td> <td>20,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00004000
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>42,549.00000000</td> <td>1,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00006000
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>62,549.00000000</td> <td>20,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00042600
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>67,549.00000000</td> <td>5,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00042740
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>97,549.00000000</td> <td>30,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00043480
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>101,549.00000000</td> <td>4,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00043497
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>123,719.70000000</td> <td>22,170.70000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00043500
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>123,904.70000000</td> <td>185.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00044840
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>123,967.31615197</td> <td>62.61615197</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link href="#" className="sell">
                                                                        0.00049000
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>123,975.71615197</td> <td>8.40000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00052989
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>141,876.71560598</td> <td>17,900.99945401</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00052990
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>151,876.71560598</td> <td>10,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00054990
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>161,876.71560598</td> <td>10,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00056330
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>162,876.71560598</td> <td>1,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link href="#" className="sell">
                                                                        0.00056990
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>172,876.71560598</td> <td>10,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link to="#" className="sell">
                                                                        0.00058990
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>182,876.71560598</td> <td>10,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link href="#" className="sell">
                                                                        0.00060000
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>202,876.71560598</td> <td>20,000.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link href="#" className="sell">
                                                                        0.00062000
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>239,202.71560598</td> <td>36,326.00000000</td>
                                                            </tr>
                                                            <tr className="text-xs-right">
                                                                <td>
                                                                    <Link href="#" className="sell">
                                                                        69.00000000
                                                                    </Link>
                                                                </td>{" "}
                                                                <td>239,203.71560598</td> <td>1.00000000</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex d-flex xs12 lg5 xl4">
                            <div className="v-card--core hide-overflow v-card theme--light">
                                {/**/}{" "}
                                <div>
                                    <div
                                        className="v-item-group elevation-0 pa-1 theme--light v-btn-toggle v-btn-toggle--only-child v-btn-toggle--selected"
                                        full-width
                                    >
                                        <button
                                            type="button"
                                            value="limit"
                                            className="text-capitalize mr-2 v-btn accent v-btn--active white--text v-btn--flat theme--light"
                                            style={{ minWidth: 104 }}
                                        >
                                            <div className="v-btn__content">Limit</div>
                                        </button>
                                    </div>{" "}
                                    <hr className="v-divider theme--light" />
                                </div>{" "}
                                <span className="pt-2 px-1 caption font-weight-medium">
            Fee:&nbsp; Taker (0.2000%) / Maker (0.1000%)
          </span>{" "}
                                <div className="layout wrap">
                                    <div className="flex xs12 md6">
                                        <div className="container grid-list-sm pt-2 px-2 pb-0">
                                            <div className="layout wrap">
                                                <div className="flex xs12 d-flex justify-space-between">
                                                    <strong>Ethereum</strong>{" "}
                                                    <span className="shrink">N/A</span>
                                                </div>{" "}
                                                <div className="flex xs12">
                                                    <div className="v-input v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-flat v-text-field--enclosed v-text-field--reverse v-input--hide-details v-input--is-label-active v-input--is-dirty theme--dark">
                                                        <div className="v-input__control">
                                                            <div className="v-input__slot secondary">
                                                                <div className="v-text-field__slot">
                                                                    <input min={0} type="text" />
                                                                </div>
                                                                <div className="v-input__append-inner">
                            <span className="caption white--text">
                              Amount (DBET)
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{" "}
                                                <div className="flex xs12">
                                                    <div className="v-input v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-flat v-text-field--enclosed v-text-field--reverse v-input--hide-details v-input--is-label-active v-input--is-dirty theme--dark">
                                                        <div className="v-input__control">
                                                            <div className="v-input__slot secondary">
                                                                <div className="v-text-field__slot">
                                                                    <input min={0} type="text" />
                                                                </div>
                                                                <div className="v-input__append-inner">
                            <span className="caption white--text">
                              Price (ETH)
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{" "}
                                                <div className="flex xs12">
                                                    <div
                                                        className="d-flex grey mb-2 v-card v-card--flat theme--light lighten-2"
                                                        style={{ height: 48 }}
                                                    >
                                                        <div className="v-card__text layout align-center justify-space-between">
                                                            <span className="caption grow mr-3">Total (ETH)</span>{" "}
                                                            <span className="subheading ellipsis shrink">0</span>
                                                        </div>
                                                    </div>{" "}
                                                    <div className="v-messages theme--light error--text">
                                                        <div className="v-messages__wrapper" />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="v-card__actions justify-center">
                                                <button
                                                    type="button"
                                                    className="white--text v-btn v-btn--large v-btn--depressed theme--light v-btn--readonly"
                                                    style={{
                                                        backgroundColor: "rgba(76, 175, 80, 0.3)",
                                                        borderColor: "rgba(76, 175, 80, 0.3)"
                                                    }}
                                                >
                                                    <div className="v-btn__content">Buy</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="flex xs12 hidden-md-and-up">
                                        <hr className="v-divider theme--light" />
                                    </div>{" "}
                                    <div className="flex xs12 md6">
                                        <div className="container grid-list-sm pt-2 px-2 pb-0">
                                            <div className="layout wrap">
                                                <div className="flex xs12 d-flex justify-space-between">
                                                    <strong>DecentBet</strong>{" "}
                                                    <span className="shrink">N/A</span>
                                                </div>{" "}
                                                <div className="flex xs12">
                                                    <div className="v-input v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-flat v-text-field--enclosed v-text-field--reverse v-input--hide-details v-input--is-label-active v-input--is-dirty theme--dark">
                                                        <div className="v-input__control">
                                                            <div className="v-input__slot secondary">
                                                                <div className="v-text-field__slot">
                                                                    <input min={0} type="text" />
                                                                </div>
                                                                <div className="v-input__append-inner">
                            <span className="caption white--text">
                              Amount (DBET)
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{" "}
                                                <div className="flex xs12">
                                                    <div className="v-input v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-flat v-text-field--enclosed v-text-field--reverse v-input--hide-details v-input--is-label-active v-input--is-dirty theme--dark">
                                                        <div className="v-input__control">
                                                            <div className="v-input__slot secondary">
                                                                <div className="v-text-field__slot">
                                                                    <input min={0} type="text" />
                                                                </div>
                                                                <div className="v-input__append-inner">
                            <span className="caption white--text">
                              Price (ETH)
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{" "}
                                                <div className="flex xs12">
                                                    <div
                                                        className="d-flex grey mb-2 v-card v-card--flat theme--light lighten-2"
                                                        style={{ height: 48 }}
                                                    >
                                                        <div className="v-card__text layout align-center justify-space-between">
                                                            <span className="caption grow mr-3">Total (ETH)</span>{" "}
                                                            <span className="subheading ellipsis shrink">0</span>
                                                        </div>
                                                    </div>{" "}
                                                    <div className="v-messages theme--light error--text">
                                                        <div className="v-messages__wrapper" />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="v-card__actions justify-center">
                                                <button
                                                    type="button"
                                                    className="white--text v-btn v-btn--large v-btn--depressed theme--light v-btn--readonly"
                                                    style={{
                                                        backgroundColor: "rgba(255, 82, 82, 0.3)",
                                                        borderColor: "rgba(255, 82, 82, 0.3)"
                                                    }}
                                                >
                                                    <div className="v-btn__content">Sell</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex d-flex">
                            <div
                                className="v-card--core hide-overflow v-card theme--light"
                                style={{ minHeight: 200 }}
                            >
                                {/**/}{" "}
                                <div>
                                    <div
                                        className="v-item-group elevation-0 pa-1 theme--light v-btn-toggle v-btn-toggle--only-child v-btn-toggle--selected"
                                        full-width
                                    >
                                        <button
                                            type="button"
                                            value="openOrders"
                                            className="text-capitalize mr-2 v-btn accent v-btn--active white--text v-btn--flat theme--light"
                                            style={{ minWidth: 104 }}
                                        >
                                            <div className="v-btn__content">Open Orders</div>
                                        </button>
                                    </div>{" "}
                                    <hr className="v-divider theme--light" />
                                </div>{" "}
                                <div className="v-data-table--dense">
                                    <div className="v-table__overflow">
                                        <table className="v-datatable v-table theme--light">
                                            <thead>
                                            <tr>
                                                <th
                                                    role="columnheader"
                                                    scope="col"
                                                    aria-label="Time: Not sorted."
                                                    aria-sort="none"
                                                    className="column text-xs-right"
                                                >
                                                    Time
                                                </th>
                                                <th
                                                    role="columnheader"
                                                    scope="col"
                                                    aria-label="Pair: Not sorted."
                                                    aria-sort="none"
                                                    className="column text-xs-right"
                                                >
                                                    Pair
                                                </th>
                                                <th
                                                    role="columnheader"
                                                    scope="col"
                                                    aria-label="Side: Not sorted."
                                                    aria-sort="none"
                                                    className="column text-xs-right"
                                                >
                                                    Side
                                                </th>
                                                <th
                                                    role="columnheader"
                                                    scope="col"
                                                    aria-label="Price: Not sorted."
                                                    aria-sort="none"
                                                    className="column text-xs-right"
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    role="columnheader"
                                                    scope="col"
                                                    aria-label="Amount: Not sorted."
                                                    aria-sort="none"
                                                    className="column text-xs-right"
                                                >
                                                    Amount
                                                </th>
                                                <th
                                                    role="columnheader"
                                                    scope="col"
                                                    aria-label="Filled%: Not sorted."
                                                    aria-sort="none"
                                                    className="column text-xs-right"
                                                >
                                                    Filled%
                                                </th>
                                                <th
                                                    role="columnheader"
                                                    scope="col"
                                                    aria-label="Total: Not sorted."
                                                    aria-sort="none"
                                                    className="column text-xs-right"
                                                >
                                                    Total
                                                </th>
                                                <th
                                                    role="columnheader"
                                                    scope="col"
                                                    aria-label="Action: Not sorted."
                                                    aria-sort="none"
                                                    className="column text-xs-right"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                            <tr className="v-datatable__progress">
                                                <th colSpan={8} className="column" />
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan={8} className="text-xs-center">
                                                    Please login to view open orders
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="v-datatable v-table theme--light">
                                        <div className="v-datatable__actions">
                                            <div className="v-datatable__actions__select">
                                                Rows per page:
                                                <div
                                                    role="combobox"
                                                    aria-controls={""}
                                                    aria-expanded={true}
                                                    className="v-input v-text-field v-select v-input--hide-details v-input--is-label-active v-input--is-dirty theme--light"
                                                >
                                                    <div className="v-input__control">
                                                        <div className="v-input__slot">
                                                            <div className="v-select__slot">
                                                                <div className="v-select__selections">
                                                                    <div className="v-select__selection v-select__selection--comma">
                                                                        50
                                                                    </div>
                                                                    <input
                                                                        aria-label="Rows per page:"
                                                                        readOnly="readonly"
                                                                        type="text"
                                                                        autoComplete="on"
                                                                        aria-readonly="false"
                                                                    />
                                                                </div>
                                                                <div className="v-input__append-inner">
                                                                    <div className="v-input__icon v-input__icon--append">
                                                                        <MdKeyboardArrowDown
                                                                            className="v-icon mdi mdi-menu-down theme--light"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="v-menu" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="v-datatable__actions__range-controls">
                                                <div className="v-datatable__actions__pagination">–</div>
                                                <button
                                                    disabled="disabled"
                                                    type="button"
                                                    className="v-btn v-btn--disabled v-btn--flat v-btn--icon theme--light"
                                                    aria-label="Previous page"
                                                >
                                                    <div className="v-btn__content">
                                                        <MdKeyboardArrowLeft
                                                            className="v-icon mdi mdi-chevron-left theme--light"
                                                        />
                                                    </div>
                                                </button>
                                                <button
                                                    disabled="disabled"
                                                    type="button"
                                                    className="v-btn v-btn--disabled v-btn--flat v-btn--icon theme--light"
                                                    aria-label="Next page"
                                                >
                                                    <div className="v-btn__content">
                                                        <MdKeyboardArrowRight
                                                            className="v-icon mdi mdi-chevron-right theme--light"
                                                        />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div />
                </div>
            </div>
        </main>
        </div>
    );
}
export default Trade;
