import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import dotenv from 'dotenv';
// import path from 'path';

// if (process.env.NODE_ENV === 'production') {

// }

console.log("process.env.REACT_APP_SERVER_URL: ",process.env.REACT_APP_SERVER_URL)
                        

export const client = new ApolloClient(
    {
        link: new HttpLink(
            {
            uri: process.env.REACT_APP_SERVER_URL,  // "http://localhost:4000",
            credentials: "include",       
        }),
        cache: new InMemoryCache(),
    }
)
