import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams} from "react-router";
import {MdKeyboardArrowLeft,MdKeyboardArrowDown,MdKeyboardArrowRight} from "react-icons/md"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {DEX_API_URL} from "../../helpers/constants/constants";
import {amount, financial, trade} from "../../helpers/constants/helpers";
import moment from "moment";

const  Trade = props => {

    const [activeTab,setActiveTab] = useState(0)
    const [data, setData] = useState([])
    const [buyData, setBuyData] = useState([])
    const [sellData, setSellData] = useState([])
    const {base,quote}= useParams();

    const handleTab = (index) => {
        setActiveTab(index)
    }
    //get pair dex press list
    async function getPrices() {
        let response = await fetch(DEX_API_URL + 'market/trades/'+quote+'/'+base+'?page=1&limit=32')
        let result = await response.json();
        setData(result.trades)
    }

    //buy api
    async function buyPrices() {
        let response = await fetch(DEX_API_URL + 'market/orderbook/'+quote+'/'+base+'?type=buy&page=1&limit=1000')
        let result = await response.json();
        setBuyData(result.orders)
    }

//sell api list
    async function sellPrices() {
        let response = await fetch(DEX_API_URL + 'market/orderbook/'+quote+'/'+base+'?type=sell&page=1&limit=32')
        let result = await response.json();
        setSellData(result.orders)
    }



    useEffect(() => {
        getPrices();
        buyPrices();
       sellPrices();
    }, [quote]);

    return (
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
                                <div>
                                    <div
                                        className="v-item-group elevation-0 pa-1 theme--light v-btn-toggle v-btn-toggle--only-child v-btn-toggle--selected"
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
                                                <tbody className="__web-inspector-hide-shortcut__">
                                                {activeTab === 0 && data && data.length > 0 && data.map((item, key) => {
                                                    return (
                                                        <tr data-v-64a9250c className={item.side === "buy" ? "buy-sell text-xs-right":"trade-sell text-xs-right"} key={key}>
                                                            <td data-v-64a9250c>{financial(item.price)}</td>
                                                            <td data-v-64a9250c>{item.side === "buy" ? trade(item.amountSent) :trade(item.amountReceived)}</td>
                                                            <td data-v-64a9250c className="text-xs-right">
                                                                {moment(item.blockTimestamp).format('LL')}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                {activeTab === 1 && (
                                                    <tr>
                                                        <td colSpan="3" className="text-xs-center">Please login to view your
                                                            trades
                                                        </td>
                                                    </tr>
                                                )}
                                                </tbody>

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
                                                            {buyData && buyData.length > 0 && buyData.map((item, key) => {
                                                                return(
                                                            <tr className="text-xs-right" key={key}>
                                                                <td  id="buyOrderBaseMeasure">
                                                                    {amount(item.amountGet)}
                                                                </td>
                                                                <td>{amount(item.available)}</td>
                                                                <td>
                                                                    <Link to="#" className="buy">
                                                                        {financial(item.price)}
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                                    )})}
                                                                    {buyData && buyData.length === 0 && (
                                                                <tr>
                                                                    <td colSpan="3" className="text-xs-center">No data found!
                                                                    </td>
                                                                </tr>
                                                            )}
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
                                                            {sellData && sellData.length > 0 && sellData.map((item, key) => {
                                                                return(
                                                                    <tr className="text-xs-right" key={key}>
                                                                        <td className id="sellOrderBaseMeasure">
                                                                            <Link to="#" className="sell">
                                                                               {financial(item.price)}
                                                                            </Link>
                                                                        </td>
                                                                        {" "}
                                                                        <td>{item.amountGet}</td>
                                                                        <td>{trade(item.amountGive.slice(0, 8))}</td>
                                                                    </tr>
                                                                )})}
                                                            {sellData && sellData.length === 0 && (
                                                                <tr>
                                                                    <td colSpan="3" className="text-xs-center">No data found!
                                                                    </td>
                                                                </tr>
                                                            )}
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
                                        full-width={"true"}
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

    );
}
export default Trade;
