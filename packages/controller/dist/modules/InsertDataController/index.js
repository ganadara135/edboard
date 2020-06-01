"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
const normalizeErrors_1 = require("../../utils/normalizeErrors");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log(values);
            const { data: { register } } = await this.props.mutate({
                variables: values
            });
            console.log('response : ', register);
            if (register) {
                return normalizeErrors_1.normalizeErrors(register);
            }
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const REGISTER_MUTATION = graphql_tag_1.default `
    mutation RegisterMutation($email: String!, $password: String!){
        register(email: $email, password: $password){
            path
            message
        }
    }
`;
exports.InsertDataController = react_apollo_1.graphql(REGISTER_MUTATION)(C);
//# sourceMappingURL=index.js.map