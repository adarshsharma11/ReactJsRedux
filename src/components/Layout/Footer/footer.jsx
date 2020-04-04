import React from 'react';
import { Link } from 'react-router-dom';
const  Footer = props => {
    return (
        <footer
            className="v-footer v-footer--absolute v-footer--inset theme--light"
            style={{ height: 32 }}
        >
            <div  className="layout">
                <div  className="flex">
                    <Link to="/legal" className="mx-2 link">
                        Legal
                    </Link>
                </div>{" "}
                <div  className="flex">
                    <Link
                        to="https://docs.google.com/forms/d/1Ne9wlmPo0e6objg4HKhTmkymtOMnWUSXMXGZbcuKJKc/edit?usp=sharing"
                        target="_blank"
                        rel="noopener"
                        className="mx-2 link"
                    >
                        Listing Request
                    </Link>
                </div>{" "}
                <div  className="flex">
                    <Link
                        to="https://twitter.com/Halo_DEX?utm_source=platform"
                        target="_blank"
                        rel="noopener"
                        className="mx-2 link"
                    >
                        Twitter
                    </Link>
                </div>{" "}
                <div  className="spacer" />{" "}
                <div  className="flex text-xs-right mr-2">
                    Halo Platform Technology &nbsp;2020 ©
                </div>
            </div>
        </footer>
    );
}
export default Footer;
