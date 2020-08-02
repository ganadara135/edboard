"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMonthController = void 0;
const React = require("react");
const graphql_tag_1 = require("graphql-tag");
const react_apollo_1 = require("react-apollo");
const GETMONTH_QUERY = graphql_tag_1.default `
    query GetMonthQuery($m_id: ID!) {
      getMonthQuery(m_id:$m_id){
        id
        month
        goal
        description
      }
    }
`;
class GetMonthController extends React.PureComponent {
    render() {
        const { children, m_id } = this.props;
        return (React.createElement(react_apollo_1.Query, { query: GETMONTH_QUERY, variables: { m_id } }, ({ data, loading }) => {
            let getData = null;
            if (data && data.getMonthQuery) {
                getData = data.getMonthQuery;
            }
            return children({
                getData,
                loading
            });
        }));
    }
}
exports.GetMonthController = GetMonthController;
//# sourceMappingURL=index.js.map