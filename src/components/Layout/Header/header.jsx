import React from 'react';
import logo from '../../../public/assets/img/logo/halodex_white_logo.png';
import { MdHttps,MdWifi } from 'react-icons/md';
import { Link } from 'react-router-dom';
const  Header = props => {
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
export default Header;

