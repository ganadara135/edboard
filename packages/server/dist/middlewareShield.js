"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_shield_1 = require("graphql-shield");
const isAuthenticated = graphql_shield_1.rule()((_, __, context) => {
    console.log("aaaaaaaaaa");
    console.log("context.session.userId : ", context.session.userId);
    console.log("!context.session.userId : ", !context.session.userId);
    console.log("!!context.session.userId : ", !!context.session.userId);
    const chkval = undefined;
    console.log("chkval : ", chkval);
    console.log("!chkval : ", !chkval);
    console.log("!!chkval : ", !!chkval);
    return !!context.session.userId;
});
exports.MiddlewareShield = graphql_shield_1.shield({
    Mutation: {
        createListing: isAuthenticated,
        deleteListing: isAuthenticated
    }
});
//# sourceMappingURL=middlewareShield.js.map