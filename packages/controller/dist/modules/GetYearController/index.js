"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetYearController = void 0;
const React = require("react");
const graphql_tag_1 = require("graphql-tag");
const react_apollo_1 = require("react-apollo");
const GETYEAR_QUERY = graphql_tag_1.default `
    query GetYearQuery($y_id: ID!) {
      getYearQuery(y_id:$y_id){
        id
        year
        goal
        description
      }
    }
`;
class GetYearController extends React.PureComponent {
    render() {
        const { children, y_id } = this.props;
        return (React.createElement(react_apollo_1.Query, { query: GETYEAR_QUERY, variables: { y_id }, fetchPolicy: "no-cache" }, ({ data, loading }) => {
            let getData = null;
            if (data && data.getYearQuery) {
                getData = data.getYearQuery;
            }
            return children({
                getData,
                loading
            });
        }));
    }
}
exports.GetYearController = GetYearController;
//# sourceMappingURL=index.js.map