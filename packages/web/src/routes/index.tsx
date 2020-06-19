import * as React from "react";
import {BrowserRouter, Route, Switch  } from 'react-router-dom';


import { TextPage } from "../modules/TestPage";
// import { AuthRoute } from "@abb/controller";
// import { CreateListingConnector } from "../modules/listing/create/CreateListingConnector";
// import { DemoDelete } from "../modules/listing/delete/DemoDelete";
import { InsertMonthConnector } from "../modules/InsertMonth/InsertMonthConnector";
import { InsertYearConnector } from "../modules/InsertYear/InsertYearConnector";
import { CreateEDBoardConnector } from "../modules/CreateEDBoard/CreateEDBoardConnector"


export const Routes = () => (
    <BrowserRouter>
        <Switch>
        {/* <div> <h1>Hello</h1></div>; */}
            {/* <Route exact={true} path="/InsertYear"  component={InsertYearConnector} /> */}
            <Route exact={true} path="/createedb" component={CreateEDBoardConnector} />
            <Route exact={true} path="/insertyear" component={InsertYearConnector} />
            <Route exact={true} path="/insertmonth" component={InsertMonthConnector} />
            
           
            <Route path="/m" component={TextPage} />
            {/* <AuthRoute path="/create-listing" component={CreateListingConnector} />
            <AuthRoute path="/delete-demo" component={DemoDelete} /> */}
        </Switch>
    </BrowserRouter>
);