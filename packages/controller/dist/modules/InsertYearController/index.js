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
            const { data: { insertGoal } } = await this.props.mutate({
                variables: values
                // variables: {insertGoal: values} as any 
            });
            console.log('response : ', insertGoal);
            if (insertGoal) {
                return normalizeErrors_1.normalizeErrors(insertGoal);
            }
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
            path
            message
        }
    }
`;
exports.InsertYearController = react_apollo_1.graphql(INSERTYEAR_MUTATION)(C);
//# sourceMappingURL=index.js.map