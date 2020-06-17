"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertYearController = void 0;
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
const normalizeErrors_1 = require("../../utils/normalizeErrors");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log("cont: ", values);
            const { data: { insertYear } } = await this.props.mutate({
                variables: values
                // variables: {insertGoal: values} as any 
            });
            console.log('response : ', insertYear);
            if (!insertYear.ok) {
                return normalizeErrors_1.normalizeErrors(insertYear);
            }
            console.log('response2222 : ', insertYear.ok);
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const INSERTYEAR_MUTATION = graphql_tag_1.default `
    mutation InsertYearMutation($edboardName: String!, $yeargoals: YearGoalInput
    ){
        insertYear(edboardName: $edboardName, yeargoals: $yeargoals){
            ok
            message
            path
        }
    }
`;
exports.InsertYearController = react_apollo_1.graphql(INSERTYEAR_MUTATION)(C);
//# sourceMappingURL=index.js.map