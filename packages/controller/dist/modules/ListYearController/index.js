"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListYearController = void 0;
// @ts-ignore
const React = require("react");
const graphql_tag_1 = require("graphql-tag");
const react_apollo_1 = require("react-apollo");
const LISTYEAR_QUERY = graphql_tag_1.default `
    query ListYearQuery($yearName: Int!) {
      listYearQuery(yearName:$yearName)
    }
`;
class ListYearController extends React.PureComponent {
    render() {
        const { children, yearName } = this.props;
        return (React.createElement(react_apollo_1.Query, { query: LISTYEAR_QUERY, variables: { yearName }, fetchPolicy: "no-cache" }, ({ data, loading }) => {
            let listing = null;
            if (data && data.listYearQuery) {
                listing = data.listYearQuery;
            }
            return children({
                listing,
                loading
            });
        }));
    }
}
exports.ListYearController = ListYearController;
//# sourceMappingURL=index.js.map