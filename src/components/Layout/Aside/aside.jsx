import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {MdSearch, MdKeyboardArrowLeft, MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/md"
import 'react-dropdown/style.css';
import {DEX_API_URL_TEST} from "../../../helpers/constants/constants";
import {financial,percentage} from "../../../helpers/constants/helpers";

const Aside = props => {
    const width = props.width !== 'undefined' ? props.width : 225
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [label, setLabel] = useState(false)

    //get pairs price list
    async function getPrices() {
        let response = await fetch(DEX_API_URL_TEST + 'public/pricing/all?start=1549022400000&end=1549022400000&limit=10&resolution=24h')
        let result = await response.json();
       /* const selectedTokens = ['UDOO', 'FLASH', 'HST', 'PEG']
        const balances = result.filter(ticker => !selectedTokens.includes(ticker.quoteTicker))*/
        setData(result)
        setFilterData(result)
    }

    //search elements
    const onSearch = event => {
        const query = event.target.value;
        let label   = query === "" ? false : true;
        setLabel(label)
        const filteredData = filterData.filter(element => {
            return element.quoteTicker.toLowerCase().includes(query.toLowerCase());
        });
        setData(filteredData)
    }

    useEffect(() => {
        getPrices();
    }, []);
    return (
        <div>
            <aside
                className="v-navigation-drawer v-navigation-drawer--clipped v-navigation-drawer--fixed v-navigation-drawer--open theme--light"
                data-booted="true"
                style={{
                    height: "100%",
                    marginTop: 64,
                    maxHeight: "calc(100% - 64px)",
                    transform: "translateX(0px)",
                    width: width
                }}
            >
                <div
                    className="v-card--core hide-overflow v-card--volume elevation-0 fill-height v-card v-card--tile theme--light">
                    {/**/}{" "}
                    <div className="layout column align-space-between fill-height">
                        <div className="v-menu px-2 v-menu--inline">
                            <div className="v-menu__activator">
                                <button
                                    type="button"
                                    className="v-btn v-btn--block v-btn--depressed v-btn--small theme--light secondary"
                                >
                                    <div className="v-btn__content">
                                        <span>{width === 225 ? "Ethereum" : "ETH"}</span>{" "}
                                        <MdKeyboardArrowDown
                                            aria-hidden="true"
                                            className="v-icon mdi mdi-chevron-down theme--light"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                        {" "}
                        <div className="pa-2">
                            <div
                                className="v-input shrink v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-inverted v-text-field--enclosed v-input--hide-details theme--light">
                                <div className="v-input__control">
                                    <div className="v-input__slot">
                                        <div className="v-text-field__slot">
                                            { label === false && (
                                                <label
                                                    aria-hidden="true"
                                                    className="v-label theme--light"
                                                    style={{left: 0, right: "auto", position: "absolute"}}
                                                >
                                                    {width === 225 ? "Search Markets" : "Search"}
                                                </label>
                                            )}
                                            <input aria-label="Search Markets" type="text" onChange={onSearch}/>
                                        </div>
                                        {width === 225 && (
                                            <div className="v-input__append-inner">
                                                <div className="v-input__icon v-input__icon--append">
                                                    <MdSearch
                                                        className="v-icon mdi mdi-magnify theme--light"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {" "}
                        <div className="scroll-y v-data-iterator theme--light">
                            <div className="v-data-iterator--volume">
                                {data && data.length > 0 && data.map((item, key) => {
                                    return (
                                        <Link
                                            to={{pathname:"/trade/"+item.quoteTicker+"/"+ item.baseTicker,state:{item}}}
                                            className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                                            key={key}
                                        >
                                            <div className="layout">
                                                <div className="flex xs6">
                                                    <strong className="no-wrap">{item.quoteTicker}</strong>{" "}
                                                    {width === 225 && (
                                                        <div className="grey--text ellipsis" style={{width: 100}}>
                                                            {financial(item.baseVolume)}
                                                        </div>
                                                    )}
                                                </div>
                                                {" "}
                                                {width === 225 && (
                                                    <div className="flex text-xs-right xs6">
                                                        <span className={percentage(item.percentChange) < 0 ? "red--text" : percentage(item.percentChange) === 0 ? "grey--text" : percentage(item.percentChange) > 0 ? "green--text" : "grey--text"}>{percentage(item.percentChange)}%</span>{" "}
                                                        <div className="grey--text ellipsis">{financial(item.low)}</div>
                                                    </div>
                                                )}
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        {" "}
                        <button
                            type="button"
                            className="mt-auto v-btn v-btn--block v-btn--flat theme--light"
                            style={{position: "relative", flex: "0 1 auto"}}
                            onClick={props.onClick}
                        >
                            <div className="v-btn__content">
                                {width === 225 && (
                                    <MdKeyboardArrowLeft
                                        className="v-icon mdi mdi-chevron-left theme--light"
                                    />
                                )}
                                {width === 105 && (
                                    <MdKeyboardArrowRight
                                        className="v-icon mdi mdi-chevron-right theme--light"
                                    />
                                )}
                            </div>
                        </button>
                    </div>
                </div>
                <div className="v-navigation-drawer__border"/>
            </aside>;
        </div>
    );
}
export default Aside;

