import React from 'react';
import { Link } from 'react-router-dom';
const  Footer = props => {
    return (
        <div>
            <footer
                data-v-4db7f052
                className="v-footer v-footer--absolute v-footer--inset theme--light"
                style={{ height: 32, paddingLeft: 225 }}
            >
                <div data-v-4db7f052 className="layout">
                    <div data-v-4db7f052 className="flex">
                        <Link
                            data-v-4db7f052
                            to="/legal"
                            className="mx-2 link router-link-exact-active router-link-active"
                        >
                            Legal
                        </Link>
                    </div>{" "}
                    <div data-v-4db7f052 className="flex">
                        <a
                            data-v-4db7f052
                            href="https://docs.google.com/forms/d/1Ne9wlmPo0e6objg4HKhTmkymtOMnWUSXMXGZbcuKJKc/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className
                        >
                            Listing Request
                        </a>
                    </div>{" "}
                    <div data-v-4db7f052 className="flex">
                        <a
                            data-v-4db7f052
                            href="https://twitter.com/Halo_DEX?utm_source=platform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className
                        >
                            Twitter
                        </a>
                    </div>{" "}
                    <div data-v-4db7f052 className="spacer" />{" "}
                    <div data-v-4db7f052 className="flex text-xs-right mr-2">
                        Halo Platform Technology &nbsp;2020 ©
                    </div>
                </div>
            </footer>
        </div>

);
}
export default Footer;

