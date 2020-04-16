import React, {useState,useEffect} from 'react';
import logo from '../../../public/assets/img/logo/halodex_white_logo.png';
import { MdHttps,MdWifi } from 'react-icons/md';
import coin from "../../../public/assets/img/logo/coinmarketcap.png"
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {financial,financialUsd,percentage} from "../../../helpers/constants/helpers";
import {CRYPTO_API_URL} from "../../../helpers/constants/constants";

const  Header = props => {

    const [price, setPrice] = useState(0)
    async function getCryptoPrices() {
        let response = await fetch(CRYPTO_API_URL)
        let result = await response.json();
        setPrice(result.USD)
    }
    let {item} = typeof  props.location.state !== 'undefined' ?  props.location.state : {};
    useEffect(() => {
        getCryptoPrices();
    }, []);
    return (

        <nav
            className="v-toolbar v-toolbar--clipped v-toolbar--fixed theme--dark primary"
            id="app-toolbar"
            data-booted="true"
            style={{
                marginTop: 0,
                paddingRight: 0,
                paddingLeft: 0,
                transform: "translateY(0px)"
            }}
        >
            <div className="v-toolbar__content" style={{ height: 64 }}>
                <Link to="/" className="mr-4 router-link-exact-active router-link-active">
                    <img
                        src={logo}
                        alt="HALO Platform"
                        height="48px"
                        className="d-block mx-auto shrink"
                    />
                </Link>{" "}
                {item && (
                    <div
                        className="mx-auto v-card v-card--flat theme--dark transparent"
                        style={{ maxWidth: 800, width: "100%" }}
                    >
                        <div className="layout align-center">
                            <div className="flex mr-2 hidden-xs-only" style={{ flex: "1 0 150px" }}>
                                <span className="headline font-weight-bold">{item.quoteTicker}</span>{" "}
                                <span className="subheading font-weight light grey--text"> / {item.baseTicker}</span>{" "}
                                <div className="hidden-md-and-down">{item.name}</div>
                            </div>{" "}
                            <div className="flex tooltip mr-2 hidden-xs-only">
                                <a
                                    href="https://coinmarketcap.com/"
                                    target="_blank"
                                    rel={"noopener noreferrer"}
                                    className="mr-4 logo-center"
                                >
                                    <img
                                        src={coin}
                                        alt="HALO Platform"
                                        height="40px"
                                        className="d-block mx-auto shrink"
                                    />
                                </a>{" "}
                                <span className="tooltiptext">View on CoinMarketCap</span>
                            </div>{" "}
                            <div className="flex">
                                <div className="container fluid grid-list-xl pa-0">
                                    <div className="layout">
                                        <div className="flex hidden-xs-only shrink">
                                            <div className="grey--text">Last Price</div>{" "}
                                            <div>
                                                <span className="font-weight-bold">{financial(item.last)}</span>
                                                {" "}{" "}
                                                <span className="caption">${financialUsd(price * item.last)}</span>
                                            </div>
                                        </div>{" "}
                                        <div className="flex hidden-xs-only shrink">
                                            <div className="grey--text">24h Change</div>{" "}
                                            <span className={percentage(item.percentChange) < 0 ? "red--text" : percentage(item.percentChange) === 0 ? "grey--text" : percentage(item.percentChange) > 0 ? "green--text" : "grey--text"}>{percentage(item.percentChange)}%</span>
                                        </div>{" "}
                                        <div className="flex hidden-md-and-down shrink">
                                            <div className="grey--text">24h High</div>{" "}
                                            <span className="font-weight-bold">{financial(item.high)}</span>
                                        </div>{" "}
                                        <div className="flex hidden-md-and-down shrink">
                                            <div className="grey--text">24h Low</div>{" "}
                                            <span className="font-weight-bold">{financial(item.low)}</span>
                                        </div>{" "}
                                        <div className="flex hidden-md-and-down shrink">
                                            <div className="grey--text">24h Volume</div>{" "}
                                            <span className="font-weight-bold">{financial(item.baseVolume)}&nbsp; ETH</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className="mx-auto v-card v-card--flat theme--dark transparent"
                    style={{ maxWidth: 800, width: "100%" }}
                />{" "}
                <div className="spacer" />{" "}
                <div className="v-toolbar__items">
                    <Link
                        to="/trade"
                        className="v-btn v-btn--flat v-btn--router theme--dark"
                    >
                        <div className="v-btn__content">
                            <span>Exchange</span>
                        </div>
                    </Link>{" "}
                    {/**/} {/**/}{" "}
                    <div className="v-menu v-menu--inline">
                        <div className="v-menu__activator">
                            <button type="button" className="v-btn v-btn--flat theme--dark">
                                <div className="v-btn__content">
                                    <MdHttps color={"white"} size={"25"}/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>{" "}
                <span className="v-tooltip mx-2 v-tooltip--bottom">
      <span>
        <MdWifi color={"green"} size={"18"}/>
      </span>
    </span>
            </div>
        </nav>
    );
}
export default withRouter(Header);

