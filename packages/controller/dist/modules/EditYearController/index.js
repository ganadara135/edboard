"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditYearController = void 0;
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
const normalizeErrors_1 = require("../../utils/normalizeErrors");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log("cont: ", values);
            const { data: { editYear } } = await this.props.mutate({
                variables: values
                // variables: {insertGoal: values} as any 
            });
            console.log('response : ', editYear);
            if (!editYear.ok) {
                return normalizeErrors_1.normalizeErrors(editYear);
            }
            console.log('response2222 : ', editYear.ok);
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const EDITYEAR_MUTATION = graphql_tag_1.default `
    mutation EditYearMutation($y_id: ID!, $year: Int, $goal: Int, $description: String
    ){
        editYear(y_id: $y_id, year: $year, goal: $goal, description: $description){
            ok
            message
            path
        }
    }
`;
exports.EditYearController = react_apollo_1.graphql(EDITYEAR_MUTATION)(C);
//# sourceMappingURL=index.js.map