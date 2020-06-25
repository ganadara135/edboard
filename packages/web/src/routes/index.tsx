import * as React from "react";
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import { TextPage } from "../modules/TestPage";
// import { AuthRoute } from "@abb/controller";
// import { CreateListingConnector } from "../modules/listing/create/CreateListingConnector";
// import { DemoDelete } from "../modules/listing/delete/DemoDelete";
import { InsertMonthConnector } from "../modules/InsertMonth/InsertMonthConnector";
import { InsertYearConnector } from "../modules/InsertYear/InsertYearConnector";
import { CreateEDBoardConnector } from "../modules/CreateEDBoard/CreateEDBoardConnector";
import { ViewListingMNConnector } from "../modules/ViewListingMN/ViewListingMNconnector";
import Home  from "../modules/Home";


export const Routes = () => (
    <BrowserRouter>
        <Switch>
        {/* <div> <h1>Hello</h1></div>; */}
            <Route exact={true} path="/"  component={Home} />
            <Route exact={true} path="/createedb" component={CreateEDBoardConnector} />
            <Route exact={true} path="/insertyear" component={InsertYearConnector} />
            <Route exact={true} path="/insertmonth" component={InsertMonthConnector} />
            <Route exact={true} path="/viewmn" component={ViewListingMNConnector} />
            
            <Route path="/m" component={TextPage} />
            <Redirect from={"*"} to={"/"} />
            {/* <AuthRoute path="/create-listing" component={CreateListingConnector} />
            <AuthRoute path="/delete-demo" component={DemoDelete} /> */}
        </Switch>
    </BrowserRouter>
);