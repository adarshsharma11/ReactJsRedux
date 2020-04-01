import React , {useState} from 'react';
const  Footer = props => {
    return (
        <footer
            data-v-4db7f052
            className="v-footer v-footer--absolute v-footer--inset theme--light"
            style={{ height: 32 }}
        >
            <div data-v-4db7f052 className="layout">
                <div data-v-4db7f052 className="flex">
                    <a data-v-4db7f052 href="/legal" className="mx-2 link">
                        Legal
                    </a>
                </div>{" "}
                <div data-v-4db7f052 className="flex">
                    <a
                        data-v-4db7f052
                        href="https://docs.google.com/forms/d/1Ne9wlmPo0e6objg4HKhTmkymtOMnWUSXMXGZbcuKJKc/edit?usp=sharing"
                        target="_blank"
                        rel="noopener"
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
                        rel="noopener"
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
    );
}
export default Footer;

