"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log(values);
            const { data: register } = await this.props.mutate({
                variables: values
            });
            console.log('response : ', register);
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const registerMutation = graphql_tag_1.default `
    mutation RegisterMutation($email: String!, $password: String!){
        register(email: $email, password: $password){
            path
            message
        }
    }
`;
exports.RegisterController = react_apollo_1.graphql(registerMutation)(C);
//# sourceMappingURL=index.js.map