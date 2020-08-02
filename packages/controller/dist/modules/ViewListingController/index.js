"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewListingController = void 0;
// @ts-ignore
const React = require("react");
const graphql_tag_1 = require("graphql-tag");
const react_apollo_1 = require("react-apollo");
const VEIWLISTING_QUERY = graphql_tag_1.default `
  query ViewListingQuery($yearName: Int!) {
    viewListing(yearName:$yearName){
      ordered
    }
  }
`;
class ViewListingController extends React.PureComponent {
    render() {
        const { children, yearName } = this.props;
        return (React.createElement(react_apollo_1.Query, { query: VEIWLISTING_QUERY, variables: { yearName }, fetchPolicy: "no-cache" }, ({ data, loading }) => {
            let listing = null;
            if (data && data.viewListing) {
                listing = data.viewListing;
            }
            return children({
                listing,
                loading
            });
        }));
    }
}
exports.ViewListingController = ViewListingController;
//# sourceMappingURL=index.js.map