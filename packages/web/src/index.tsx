import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import {ApolloProvider } from 'react-apollo';

// import App from './App'; 
import * as serviceWorker from './serviceWorker';
import { client } from "./apollo";
import { Routes } from './routes';
import "./index.css";

// console.log("apollo clinet : ", client);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <ApolloProvider client={client}>
        {/* <App /> */}
        <Routes />
        {/* <div>
            <h2>My first Apollo app</h2>
        </div> */}
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
