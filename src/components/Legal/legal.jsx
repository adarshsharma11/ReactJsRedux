import React,{useState} from 'react';
import Aside from "../Layout/Aside/aside";


const  Legal = props => {

    const [width, setWidth] = useState( 225 )
    const handleOnClick = () => {
        let newWidth = width === 225 ? 105 : 225
        setWidth(newWidth)
    }

    return (
        <div>
            <Aside onClick={handleOnClick} width={width}/>
            <main
                className="v-content"
                data-booted="true"
                style={{padding: width === 225 ? "64px 0px 32px 225px" : "64px 0px 32px 105px"}}
            >
                <div className="v-content__wrap">
                    <div
                        data-v-f53b369e
                        className="container fill-height fluid hide-overflow"
                        id="about"
                    >
                        <div
                            data-v-f53b369e
                            className="layout align-center column justify-center"
                        >
                            <div data-v-f53b369e className="flex display-1 pb-2">
                                Policy and Legal
                            </div>{" "}
                            <div data-v-f53b369e className="flex mx-2 body-2 notice-link">
                                Privacy Policy
                            </div>
                            <div data-v-f53b369e className="flex mx-2 body-2 notice-link">
                                HaloDEX Terms Of Use
                            </div>
                            <div data-v-f53b369e className="flex mx-2 body-2 notice-link">
                                Cookie Policy
                            </div>
                            <div data-v-f53b369e className="flex mx-2 body-2 notice-link">
                                Wrapper Terms of Use
                            </div>
                            <div data-v-f53b369e className="flex mx-2 body-2 notice-link">
                                Risk Disclosure
                            </div>
                        </div>
                    </div>
                </div>
            </main>;
        </div>
    );
}
export default Legal;
