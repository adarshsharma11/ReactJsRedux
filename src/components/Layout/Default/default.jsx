import React, {useState} from 'react';
import Aside from "../Layout/Aside/aside";
import halo from "../../public/assets/img/logo/halodex_black_logo.png"
import { Link } from 'react-router-dom';

const  Default = props => {
    const [width, setWidth] = useState( 225 )
    const handleOnClick = () => {
        let newWidth = width === 225 ? 105 : 225
        setWidth(newWidth)
    }
    return (
        <div>
            <Aside width={width} onClick={handleOnClick}/>
            <main
                className="v-content"
                data-booted="true"
                style={{padding: width === 225 ? "64px 0px 32px 225px" : "64px 0px 32px 105px"}}
            >
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
                                <Link
                                    href="https://chrome.google.com/webstore/detail/halo-platform-browser-ext/oaebcmidkgapfllemhdeghglmokiakci"
                                    target="_blank"
                                >
                                    extension
                                </Link>
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
                                <Link href="https://wiki.haloplatform.tech/HaloDex" target="_blank">
                                    wiki
                                </Link>
                                .
                            </div>{" "}
                            <div data-v-898af2a8 className="flex pb-4">
                                We're completely decentralized so you have to{" "}
                                <Link href="https://twitter.com/Halo_DEX" target="_blank">
                                    follow us
                                </Link>{" "}
                                on Twitter for regular news, announcements and new coin listings.
                            </div>{" "}
                            <div data-v-898af2a8 className="flex pb-4">
                                Want to know more about our other products? Come check out the{" "}
                                <Link href="https://www.haloplatform.tech/" target="_blank">
                                    Halo Platform
                                </Link>{" "}
                                and{" "}
                                <Link href="https://blockandchain.games/" target="_blank">
                                    Block &amp; Chain Game Studios
                                </Link>
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
        </div>
    );
}
export default Default;
