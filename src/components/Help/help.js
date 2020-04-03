import React , {useState} from 'react';
import Aside from "../Layout/Aside/aside";
import halo from "../../public/assets/img/logo/halodex_black_logo.png"
import { Link } from 'react-router-dom';

const  Help = props => {
    return (
        <main
            className="v-content"
            data-booted="true"
            style={{padding: "64px 0px 32px"}}
        >
            <Aside/>
            <div className="v-content__wrap">
                <div
                    data-v-898af2a8
                    className="container fill-height fluid hide-overflow"
                    id="about"
                >
                    <div data-v-898af2a8 className="layout align-center column justify-center">
                        <img
                            data-v-898af2a8
                            src={halo}
                            alt="HALO Platform DEX"
                            width="100%"
                            className="mb-1"
                            style={{ maxHeight: 250, maxWidth: 600 }}
                        />{" "}
                        <div data-v-898af2a8 className="flex display-1 pb-4">
                            Welcome to HaloDEX
                        </div>{" "}
                        <div data-v-898af2a8 className="flex pb-4">
                            HaloDEX is the Halo Platform's decentralized exchange. This fast,
                            easy-to-use, high security exchange is the place to trade top
                            cryptocurrencies and tokens.
                        </div>{" "}
                        <div data-v-898af2a8 className="flex body-2 pb-4">
                            To get started:
                        </div>{" "}
                        <div data-v-898af2a8 className="flex pb-2">
                            1. Install the Halo{" "}
                            <a
                                href="https://chrome.google.com/webstore/detail/halo-platform-browser-ext/oaebcmidkgapfllemhdeghglmokiakci"
                                target="_blank"
                            >
                                extension
                            </a>
                        </div>{" "}
                        <div data-v-898af2a8 className="flex pb-2">
                            2. Create a feather wallet or import your existing wallet
                        </div>{" "}
                        <div data-v-898af2a8 className="flex pb-2">
                            3. Deposit currency and tokens into your wallet
                        </div>{" "}
                        <div data-v-898af2a8 className="flex pb-4">
                            Begin trading on HaloDEX
                        </div>{" "}
                        <div data-v-898af2a8 className="flex pb-4">
                            Detailed instructions with video clips can be found on our{" "}
                            <a href="https://wiki.haloplatform.tech/HaloDex" target="_blank">
                                wiki
                            </a>
                            .
                        </div>{" "}
                        <div data-v-898af2a8 className="flex pb-4">
                            We're completely decentralized so you have to{" "}
                            <a href="https://twitter.com/Halo_DEX" target="_blank">
                                follow us
                            </a>{" "}
                            on Twitter for regular news, announcements and new coin listings.
                        </div>{" "}
                        <div data-v-898af2a8 className="flex pb-4">
                            Want to know more about our other products? Come check out the{" "}
                            <a href="https://www.haloplatform.tech/" target="_blank">
                                Halo Platform
                            </a>{" "}
                            and{" "}
                            <a href="https://blockandchain.games/" target="_blank">
                                Block &amp; Chain Game Studios
                            </a>
                        </div>{" "}
                        <div data-v-898af2a8 className="flex text-xs-center">
                            {/**/}{" "}
                            <Link
                                to="/"
                                className="v-btn v-btn--large v-btn--router theme--light accent"
                                style={{ minWidth: 180 }}
                            >
                                <div className="v-btn__content">
                                    <span data-v-898af2a8>Go To DEX</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>;
        </main>
    );
}
export default Help;
