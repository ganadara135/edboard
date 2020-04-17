import * as React from "react";
import {BrowserRouter, Route, Switch  } from 'react-router-dom';

import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import { ForgotPasswordConnector } from "../modules/ForgotPassword/ForgotPasswordConnector";
import { ChangePasswordConnector } from "../modules/ChangePassword/ChangePasswordConnector";
import { TextPage } from "../modules/TestPage";

export const Routes = () => (
    <BrowserRouter>
        <Switch>
        {/* <div> <h1>Hello</h1></div>; */}
            {/* <Route   path="/" componet={<div><h1 color="blue">Hello</h1></div>} /> */}
            <Route exact={true} path="/register" component={RegisterConnector} />
            <Route  path="/login" component={LoginConnector} />
            <Route exact={true} path="/forgot-password" component={ForgotPasswordConnector} />
            <Route exact={true} path="/change-password/:key" component={ChangePasswordConnector} />
            <Route path="/m" component={TextPage} />
        </Switch>
    </BrowserRouter>
);