import React, {useState, useEffect} from 'react';
import halo from "../../public/assets/img/logo/halo.png"
import {MdOpenInNew, MdArrowUpward,MdArrowDownward} from "react-icons/md"
import {DEX_API_URL_TEST, CRYPTO_API_URL} from "../../helpers/constants/constants"
import {financial,financialUsd,percentage} from "../../helpers/constants/helpers";
import {Link} from 'react-router-dom';

const Home = props => {

    const [data, setData] = useState([])
    const [price, setPrice] = useState(0)
    const [sortBy, setSortBy] = useState("ASC");


    // get prices list
    async function getPrices() {
        let response = await fetch(DEX_API_URL_TEST + 'public/pricing/all?start=1549022400000&end=1549022400000&limit=10&resolution=24h')
        let result = await response.json();
        //console.log(result, 'ress')
       /* const selectedTokens = ['UDOO', 'FLASH', 'HST', 'PEG']
        const balances = result.filter(ticker => !selectedTokens.includes(ticker.quoteTicker))*/
        setData(result)
    }

//get crypto price in usd/ETH
    async function getCryptoPrices() {
        let response = await fetch(CRYPTO_API_URL)
        let result = await response.json();
        setPrice(result.USD)
    }

    //sort
    const sort = (key) => {
        let newData = [];
        let updateSort = sortBy === "ASC" ? "DESC" : "ASC";
        if(key === "last") {
             newData = sortBy === "ASC" ? [...data].sort((a, b) => parseFloat(a.last) - parseFloat(b.last)) : [...data].sort((a, b) => parseFloat(b.last) - parseFloat(a.last));
        }
        else if(key === "usd"){
            newData = sortBy === "ASC" ? [...data].sort((a, b) =>  parseFloat(financialUsd(price * a.last)) - parseFloat(financialUsd(price * b.last))) : [...data].sort((a, b) => parseFloat(financialUsd(price * b.last)) - parseFloat(financialUsd(price * a.last)));
        }
        else  if (key === "percent"){
            newData = sortBy === "ASC" ? [...data].sort((a, b) => parseFloat(a.percentChange) - parseFloat(b.percentChange)) : [...data].sort((a, b) => parseFloat(b.percentChange) - parseFloat(a.percentChange));
        }
        else  if (key === "24hourHigh"){
            newData = sortBy === "ASC" ? [...data].sort((a, b) => parseFloat(a.high) - parseFloat(b.high)) : [...data].sort((a, b) => parseFloat(b.high) - parseFloat(a.high));
        }
        else  if (key === "24hourLow"){
            newData = sortBy === "ASC" ? [...data].sort((a, b) => parseFloat(a.low) - parseFloat(b.low)) : [...data].sort((a, b) => parseFloat(b.low) - parseFloat(a.low));
        }
        else  if (key === "24hourVolume"){
            newData = sortBy === "ASC" ? [...data].sort((a, b) => parseFloat(a.baseVolume) - parseFloat(b.baseVolume)) : [...data].sort((a, b) => parseFloat(b.baseVolume) - parseFloat(a.baseVolume));
        }
        else {
           newData = sortBy === "ASC" ? [...data].sort((a, b) => parseFloat(a.last) - parseFloat(b.last)) : [...data].sort((a, b) => parseFloat(b.last) - parseFloat(a.last));
        }
        setData(newData);
        setSortBy(updateSort);
    }

    useEffect(() => {
        getCryptoPrices();
        getPrices();
    }, []);
    return (

        <main
            className="v-content"
            data-booted="true"
            style={{padding: "64px 0px 32px"}}
        >
            <div className="v-content__wrap">
                <div
                    className="container fluid pa-0 fill-height"
                    id="landing"
                    style={{flexDirection: "column"}}
                >
                    <div
                        className="text-xs-center pa-4 v-card v-card--flat v-card--tile theme--dark primary"
                        min-height={320}
                        style={{width: "100%"}}
                    >
                        <img
                            src={halo}
                            contain={"true"}
                            alt={"Halo Logo"}
                            height={100}
                            className="mb-3"
                        />{" "}
                        <div className="mb-3 headline accent--text">
                            Congregate. Organize. Strategize. Execute.
                        </div>
                        {" "}
                        {/**/}{" "}
                        <Link
                            to="/help"
                            className="v-btn v-btn--large v-btn--router theme--dark"
                            style={{
                                backgroundColor: "rgb(79, 109, 142)",
                                borderColor: "rgb(79, 109, 142)"
                            }}
                        >
                            <div className="v-btn__content">
                                <span>Get Started Now</span>
                            </div>
                        </Link>
                    </div>
                    {" "}
                    <div className="container" style={{maxWidth: 1280}}>
                        <div className="layout row wrap">
                            <div className="flex">
                                <div className="v-card theme--light">
                                    <div>
                                        <div
                                            className="v-item-group elevation-0 pa-1 theme--light v-btn-toggle v-btn-toggle--only-child v-btn-toggle--selected"
                                            full-width={"true"}
                                        >
                                            <button
                                                type="button"
                                                value={0}
                                                className="text-capitalize mr-2 v-btn accent v-btn--active white--text v-btn--flat theme--light"
                                                style={{minWidth: 104}}
                                            >
                                                <div className="v-btn__content">ETH Markets</div>
                                                :
                                            </button>
                                        </div>
                                        {" "}
                                        <hr className="v-divider theme--light"/>
                                    </div>
                                    {" "}
                                    <div item-text="name" item-value="baseChain">
                                        <div className="v-table__overflow">
                                            <table className="v-datatable v-table theme--light">
                                                <thead>
                                                <tr>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="Pair: Not sorted."
                                                        aria-sort="none"
                                                        className="column text-xs-left"
                                                    >
                                                        Pair
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="Name: Not sorted."
                                                        aria-sort="none"
                                                        className="column text-xs-left"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="Last Price: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        onClick={() => sort("last")}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        { sortBy === "ASC" && (
                                                        < MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                    )}
                                                        { sortBy === "DESC" && (
                                                            < MdArrowDownward size={"16"} className="v-icon"
                                                            />
                                                        )}

                                                        Last Price
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="USD: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        onClick={() => sort("usd")}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        { sortBy === "ASC" && (
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                    )}
                                                        { sortBy === "DESC" && (
                                                            <MdArrowDownward size={"16"} className="v-icon"
                                                            />
                                                        )}
                                                        USD
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="24h Change: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        onClick={() => sort("percent")}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        { sortBy === "ASC" && (
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                        )}
                                                        { sortBy === "DESC" && (
                                                            <MdArrowDownward size={"16"} className="v-icon"
                                                            />
                                                        )}
                                                        24h Change
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="24h High: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        onClick={() => sort("24hourHigh")}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        { sortBy === "ASC" && (
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                        )}
                                                        { sortBy === "DESC" && (
                                                            <MdArrowDownward size={"16"} className="v-icon"
                                                            />
                                                        )}
                                                        24h High
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="24h Low: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        onClick={() => sort("24hourLow")}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        { sortBy === "ASC" && (
                                                            <MdArrowUpward size={"16"} className="v-icon"
                                                            />
                                                        )}
                                                        { sortBy === "DESC" && (
                                                            <MdArrowDownward size={"16"} className="v-icon"
                                                            />
                                                        )}
                                                        24h Low
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="24h Volume: Sorted descending. Activate to remove sorting."
                                                        aria-sort="descending"
                                                        tabIndex={0}
                                                        onClick={() => sort("24hourVolume")}
                                                        className="column sortable  desc text-xs-right"
                                                    >
                                                        { sortBy === "ASC" && (
                                                            <MdArrowUpward size={"16"} className="v-icon"
                                                            />
                                                        )}
                                                        { sortBy === "DESC" && (
                                                            <MdArrowDownward size={"16"} className="v-icon"
                                                            />
                                                        )}
                                                        24h Volume
                                                    </th>
                                                </tr>
                                                <tr className="v-datatable__progress">
                                                    <th colSpan={8} className="column"/>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {data && data.length > 0 && data.map((item, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className="px-2">
                                                                <Link
                                                                    to={{pathname:"/trade/"+item.quoteTicker+"/"+ item.baseTicker,state:{item}}}
                                                                    className="mx-0 px-0 v-btn v-btn--flat v-btn--router theme--light primary--text"
                                                                >
                                                                    <div className="v-btn__content">
                                                                        <MdOpenInNew className={"v-icon v-icon--left"}
                                                                                     size={'16'}/>
                                                                        {item.pair}
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td>{item.name}</td>
                                                            <td className="text-xs-right">{financial(item.last)}</td>
                                                            <td className="text-xs-right">
                                                                <span
                                                                    className="font-weight-black">${financialUsd(price * item.last)}</span>
                                                            </td>
                                                            <td className="text-xs-right">
                                                                <span
                                                                    className={percentage(item.percentChange) < 0 ? "red--text" : percentage(item.percentChange) === 0 ? "grey--text" : percentage(item.percentChange) > 0 ? "green--text" : "grey--text"}>{percentage(item.percentChange)}%</span>
                                                            </td>
                                                            <td className="text-xs-right">{financial(item.high)}</td>
                                                            <td className="text-xs-right">{financial(item.low)}</td>
                                                            <td className="text-xs-right">
                                                                <span>{financial(item.baseVolume)}</span>
                                                                <strong>ETH</strong>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;

