import * as React from "react";
import {BrowserRouter, Route, Switch  } from 'react-router-dom';

import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
// import { RegisterView } from "../modules/register/ui/RegisterView";

export const Routes = () => (
    <BrowserRouter>
        <Switch>
        {/* <div> <h1>Hello</h1></div>; */}
            {/* <Route   path="/" componet={<div><h1 color="blue">Hello</h1></div>} /> */}
            <Route exact={true} path="/register" component={RegisterConnector} />
            <Route exact={true} path="/login" component={LoginConnector} />
        </Switch>
    </BrowserRouter>
);