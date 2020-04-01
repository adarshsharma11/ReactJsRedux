import React , {useState} from 'react';
import Header from "../Layout/Header/header";
import Footer from "../Layout/Footer/footer";
import halo from "../../public/assets/img/logo/halo.png"
import {MdOpenInNew} from "react-icons/md"
import {MdArrowUpward} from "react-icons/md"
const  Home = props => {
    return (
        <div>
        <Header/>
        <main
            className="v-content"
            data-booted="true"
            style={{ padding: "64px 0px 32px" }}
        >
            <div className="v-content__wrap">
                <div
                    className="container fluid pa-0 fill-height"
                    id="landing"
                    style={{ flexDirection: "column" }}
                >
                    <div
                        className="text-xs-center pa-4 v-card v-card--flat v-card--tile theme--dark primary"
                        min-height={320}
                        style={{ width: "100%" }}
                    >
                        <img
                            src={halo}
                            contain
                            height={100}
                            className="mb-3"
                        />{" "}
                        <div className="mb-3 headline accent--text">
                            Congregate. Organize. Strategize. Execute.
                        </div>{" "}
                        {/**/}{" "}
                        <a
                            href="/help"
                            className="v-btn v-btn--large v-btn--router theme--dark"
                            style={{
                                backgroundColor: "rgb(79, 109, 142)",
                                borderColor: "rgb(79, 109, 142)"
                            }}
                        >
                            <div className="v-btn__content">
                                <span>Get Started Now</span>
                            </div>
                        </a>
                    </div>{" "}
                    <div className="container" style={{ maxWidth: 1280 }}>
                        <div className="layout row wrap">
                            <div className="flex">
                                <div className="v-card theme--light">
                                    <div>
                                        <div
                                            className="v-item-group elevation-0 pa-1 theme--light v-btn-toggle v-btn-toggle--only-child v-btn-toggle--selected"
                                            full-width
                                        >
                                            <button
                                                type="button"
                                                value={0}
                                                className="text-capitalize mr-2 v-btn accent v-btn--active white--text v-btn--flat theme--light"
                                                style={{ minWidth: 104 }}
                                            >
                                                <div className="v-btn__content">ETH Markets</div>
                                            </button>
                                        </div>{" "}
                                        <hr className="v-divider theme--light" />
                                    </div>{" "}
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
                                                        className="column sortable text-xs-right"
                                                    >
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                        Last Price
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="USD: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                        USD
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="24h Change: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                        24h Change
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="24h High: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                        24h High
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="24h Low: Not sorted. Activate to sort ascending."
                                                        aria-sort="none"
                                                        tabIndex={0}
                                                        className="column sortable text-xs-right"
                                                    >
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                        24h Low
                                                    </th>
                                                    <th
                                                        role="columnheader"
                                                        scope="col"
                                                        aria-label="24h Volume: Sorted descending. Activate to remove sorting."
                                                        aria-sort="descending"
                                                        tabIndex={0}
                                                        className="column sortable active desc text-xs-right"
                                                    >
                                                        <MdArrowUpward size={"16"} className="v-icon"
                                                        />
                                                        24h Volume
                                                    </th>
                                                </tr>
                                                <tr className="v-datatable__progress">
                                                    <th colSpan={8} className="column" />
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="px-2">
                                                        <a
                                                            href="/trade/HALO/ETH"
                                                            className="mx-0 px-0 v-btn v-btn--flat v-btn--router theme--light primary--text"
                                                        >
                                                            <div className="v-btn__content">
                                                                <MdOpenInNew size={'16'}/>
                                                                HALO/ETH
                                                            </div>
                                                        </a>
                                                    </td>{" "}
                                                    <td>Halo</td>{" "}
                                                    <td className="text-xs-right">0.00000067</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="font-weight-black">$0.000089</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="red--text">-1.47%</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">0.00000068</td>{" "}
                                                    <td className="text-xs-right">0.00000067</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span>0.26800000</span> <strong>ETH</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2">
                                                        <a
                                                            href="/trade/DBET/ETH"
                                                            className="mx-0 px-0 v-btn v-btn--flat v-btn--router theme--light primary--text"
                                                        >
                                                            <div className="v-btn__content">
                                                                <MdOpenInNew size={'16'}/>
                                                                DBET/ETH
                                                            </div>
                                                        </a>
                                                    </td>{" "}
                                                    <td>DecentBet</td>{" "}
                                                    <td className="text-xs-right">0.00000300</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="font-weight-black">$0.000397</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="grey--text">0.00%</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">0.00000300</td>{" "}
                                                    <td className="text-xs-right">0.00000300</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span>0.00000000</span> <strong>ETH</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2">
                                                        <a
                                                            href="/trade/EVED/ETH"
                                                            className="mx-0 px-0 v-btn v-btn--flat v-btn--router theme--light primary--text"
                                                        >
                                                            <div className="v-btn__content">
                                                                <MdOpenInNew size={'16'}/>
                                                                EVED/ETH
                                                            </div>
                                                        </a>
                                                    </td>{" "}
                                                    <td>Evedo</td>{" "}
                                                    <td className="text-xs-right">0.00002769</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="font-weight-black">$0.003663</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="grey--text">0.00%</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">0.00002769</td>{" "}
                                                    <td className="text-xs-right">0.00002769</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span>0.00000000</span> <strong>ETH</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2">
                                                        <a
                                                            href="/trade/FCT/ETH"
                                                            className="mx-0 px-0 v-btn v-btn--flat v-btn--router theme--light primary--text"
                                                        >
                                                            <div className="v-btn__content">
                                                                <MdOpenInNew size={'16'}/>
                                                                FCT/ETH
                                                            </div>
                                                        </a>
                                                    </td>{" "}
                                                    <td>Factom</td>{" "}
                                                    <td className="text-xs-right">0.01570000</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="font-weight-black">$2.076639</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="grey--text">0.00%</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">0.01570000</td>{" "}
                                                    <td className="text-xs-right">0.01570000</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span>0.00000000</span> <strong>ETH</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2">
                                                        <a
                                                            href="/trade/HXRO/ETH"
                                                            className="mx-0 px-0 v-btn v-btn--flat v-btn--router theme--light primary--text"
                                                        >
                                                            <div className="v-btn__content">
                                                                <MdOpenInNew size={'16'}/>
                                                                HXRO/ETH
                                                            </div>
                                                        </a>
                                                    </td>{" "}
                                                    <td>HXRO</td>{" "}
                                                    <td className="text-xs-right">0.00050000</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="font-weight-black">$0.066135</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="grey--text">0.00%</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">0.00050000</td>{" "}
                                                    <td className="text-xs-right">0.00050000</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span>0.00000000</span> <strong>ETH</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2">
                                                        <a
                                                            href="/trade/VET/ETH"
                                                            className="mx-0 px-0 v-btn v-btn--flat v-btn--router theme--light primary--text"
                                                        >
                                                            <div className="v-btn__content">
                                                                <MdOpenInNew size={'16'}/>
                                                                VET/ETH
                                                            </div>
                                                        </a>
                                                    </td>{" "}
                                                    <td>VeChain</td>{" "}
                                                    <td className="text-xs-right">0.00002300</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="font-weight-black">$0.003042</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="grey--text">0.00%</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">0.00002300</td>{" "}
                                                    <td className="text-xs-right">0.00002300</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span>0.00000000</span> <strong>ETH</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2">
                                                        <a
                                                            href="/trade/VTHO/ETH"
                                                            className="mx-0 px-0 v-btn v-btn--flat v-btn--router theme--light primary--text"
                                                        >
                                                            <div className="v-btn__content">
                                                                <MdOpenInNew size={'16'}/>
                                                                VTHO/ETH
                                                            </div>
                                                        </a>
                                                    </td>{" "}
                                                    <td>VeChain Thor</td>{" "}
                                                    <td className="text-xs-right">0.00001900</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="font-weight-black">$0.002513</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">
                                                        <span className="grey--text">0.00%</span>
                                                    </td>{" "}
                                                    <td className="text-xs-right">0.00001900</td>{" "}
                                                    <td className="text-xs-right">0.00001900</td>{" "}
                                                    <td className="text-xs-right">
                                                        <span>0.00000000</span> <strong>ETH</strong>
                                                    </td>
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
            </div>
        </main>
    <Footer/>
        </div>
);
}
export default Home;

