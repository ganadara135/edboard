"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEDboardController = void 0;
// @ts-ignore
const React = require("react");
const graphql_tag_1 = require("graphql-tag");
const react_apollo_1 = require("react-apollo");
const LISTEDBOARD_QUERY = graphql_tag_1.default `
    query ListEDboardQuery {
      listEDboardQuery
    }
`;
class ListEDboardController extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (React.createElement(react_apollo_1.Query, { query: LISTEDBOARD_QUERY }, ({ data, loading }) => {
            let listing = null;
            if (data && data.listEDboardQuery) {
                listing = data.listEDboardQuery;
            }
            return children({
                listing,
                loading
            });
        }));
    }
}
exports.ListEDboardController = ListEDboardController;
//# sourceMappingURL=index.js.map