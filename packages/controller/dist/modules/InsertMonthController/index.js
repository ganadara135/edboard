"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertMonthController = void 0;
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
const normalizeErrors_1 = require("../../utils/normalizeErrors");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log("cont: ", values);
            const { data: { insertMonth } } = await this.props.mutate({
                variables: values
                // variables: {insertGoal: values} as any 
            });
            console.log('response : ', insertMonth);
            if (!insertMonth.ok) {
                return normalizeErrors_1.normalizeErrors(insertMonth);
            }
            console.log('response2222 : ', insertMonth.ok);
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const INSERTMONTH_MUTATION = graphql_tag_1.default `
    mutation InsertMonthMutation($month: Int!, $goal: Int!, $yearName: Int!, $description: String
    ){
        insertMonth(month: $month, goal: $goal, yearName: $yearName, description: $description){
            ok
            message
            path
        }
    }
`;
exports.InsertMonthController = react_apollo_1.graphql(INSERTMONTH_MUTATION)(C);
//# sourceMappingURL=index.js.map