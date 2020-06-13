"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = exports.C = void 0;
const React = require("react");
const react_apollo_1 = require("react-apollo");
const react_router_1 = require("react-router");
const graphql_tag_1 = require("graphql-tag");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.renderRoute = (routeProps) => {
            const { data, component } = this.props;
            if (!data || data.loading) {
                // loading screen
                return null;
            }
            if (!data.me) {
                // user not logged in
                console.log("user not logged in");
                return (React.createElement(react_router_1.Redirect, { to: {
                        pathname: "/login",
                        state: { next: routeProps.location.pathname }
                    } }));
            }
            const Component = component;
            return React.createElement(Component, Object.assign({}, routeProps));
        };
    }
    render() {
        const { data: _, component: __, ...rest } = this.props;
        return React.createElement(react_router_1.Route, Object.assign({}, rest, { render: this.renderRoute }));
    }
}
exports.C = C;
const ME_QUERY = graphql_tag_1.default `
    query MeQuery {
        me {
            email
        }
    }
`;
exports.AuthRoute = react_apollo_1.graphql(ME_QUERY)(C);
//# sourceMappingURL=AuthRoute.js.map