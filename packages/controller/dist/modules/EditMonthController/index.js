"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditMonthController = void 0;
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
const normalizeErrors_1 = require("../../utils/normalizeErrors");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log("cont: ", values);
            const { data: { editMonth } } = await this.props.mutate({
                variables: values
                // variables: {insertGoal: values} as any 
            });
            console.log('response : ', editMonth);
            if (!editMonth.ok) {
                return normalizeErrors_1.normalizeErrors(editMonth);
            }
            console.log('response2222 : ', editMonth.ok);
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const EDITMONTH_MUTATION = graphql_tag_1.default `
    mutation EditMonthMutation($m_id: ID!, $month: Int, $goal: Int, $description: String, $y_id: ID, $year: Int ){
        editMonth(m_id: $m_id, month: $month, goal: $goal, description: $description, y_id: $y_id, year: $year){
            ok
            message
            path
        }
    }
`;
exports.EditMonthController = react_apollo_1.graphql(EDITMONTH_MUTATION)(C);
//# sourceMappingURL=index.js.map