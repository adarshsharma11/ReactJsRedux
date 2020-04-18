import React, {useState,Suspense} from 'react';
import Aside from "../Aside/aside";
import routes from "../../../router/routes";
import { Redirect, Route, Switch } from 'react-router-dom';

const  Default = props => {
    const [width, setWidth] = useState( 225 )
    const handleOnClick = () => {
        let newWidth = width === 225 ? 105 : 225
        setWidth(newWidth)
    }
   const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    return (
        <div>
            <Aside width={width} onClick={handleOnClick}/>
            <main
                className="v-content"
                data-booted="true"
                style={{padding: width === 225 ? "50px 0px 32px 225px" : "50px 0px 32px 105px"}}
            >
                <Suspense fallback={loading()}>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )} />
                        ) : (null);
                    })}
                    <Redirect from="/" to="/" />
                </Switch>
                </Suspense>
            </main>
        </div>
    );
}
export default Default;
