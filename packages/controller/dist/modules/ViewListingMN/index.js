"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewListingMNController = void 0;
// @ts-ignore
const React = require("react");
const graphql_tag_1 = require("graphql-tag");
const react_apollo_1 = require("react-apollo");
const VEIWLISTINGMN_QUERY = graphql_tag_1.default `
    query ViewListingMNQuery($yearName: Int!) {
        viewListingMN(yearName:$yearName){
            mnInfo{
                id
                mgid{
                    id
                    month
                    ymmns{
                        id
                        description
                        mgid{
                            id
                        }
                    }
                }
                ygid{
                    id
                    year
                    ymmns{
                        id
                        description
                        mgid{
                            id
                        }
                    }
                }
            }
            monthInfo{
                id
            }
            yearInfo{
                id
            }
        }
    }
`;
class ViewListingMNController extends React.PureComponent {
    render() {
        const { children, yearName } = this.props;
        return (React.createElement(react_apollo_1.Query, { query: VEIWLISTINGMN_QUERY, variables: { yearName: yearName } }, ({ data, loading }) => {
            let listing = null;
            if (data && data.viewListingMN) {
                listing = data.viewListingMN;
            }
            return children({
                listing,
                loading
            });
        }));
    }
}
exports.ViewListingMNController = ViewListingMNController;
//# sourceMappingURL=index.js.map