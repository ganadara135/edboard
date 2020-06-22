"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEDBoardController = void 0;
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
const normalizeErrors_1 = require("../../utils/normalizeErrors");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log("cont: ", values);
            const { data: { createEDBoard } } = await this.props.mutate({
                // const data  = await this.props.mutate({
                variables: values
                // variables: {insertGoal: values} as any 
            });
            // console.log('data : ', data)
            console.log('response : ', createEDBoard);
            if (!createEDBoard.ok) {
                return normalizeErrors_1.normalizeErrors(createEDBoard);
            }
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const CREATEEDBOARD_MUTATION = graphql_tag_1.default `
    mutation CreateEDBoardMutation($name: String, $description: String) {
        createEDBoard(name: $name, description: $description){
            ok
            message
            path
        }
    }
`;
exports.CreateEDBoardController = react_apollo_1.graphql(CREATEEDBOARD_MUTATION)(C);
//# sourceMappingURL=index.js.map