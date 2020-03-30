import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { Platform } from "react-native";

// local
// const host = Platform.OS === 'ios' ? 'http://localhsot:4000' : 'http://localhost:4000';
// ncloud
const host = Platform.OS === 'ios' ? 'http://49.50.163.26:4000' : 'http://49.50.163.26:4000';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: host
    }),
    cache: new InMemoryCache()
})