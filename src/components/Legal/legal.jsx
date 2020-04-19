import React from 'react';
const  Legal = props => {
    return (
        <div className="v-content__wrap">
                    <div
                        className="container fill-height fluid hide-overflow"
                        id="about"
                    >
                        <div
                            className="layout align-center column justify-center"
                        >
                            <div  className="flex display-1 pb-2">
                                Policy and Legal
                            </div>{" "}
                            <div  className="flex mx-2 body-2 notice-link">
                                Privacy Policy
                            </div>
                            <div  className="flex mx-2 body-2 notice-link">
                                HaloDEX Terms Of Use
                            </div>
                            <div  className="flex mx-2 body-2 notice-link">
                                Cookie Policy
                            </div>
                            <div  className="flex mx-2 body-2 notice-link">
                                Wrapper Terms of Use
                            </div>
                            <div  className="flex mx-2 body-2 notice-link">
                                Risk Disclosure
                            </div>
                        </div>
                    </div>
                </div>
    );
}
export default Legal;
