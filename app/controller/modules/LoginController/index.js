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
            const { data: { login } } = await this.props.mutate({
                variables: values
            });
            console.log('response : ', login);
            if (login) {
                //show erros
                return normalizeErrors_1.normalizeErrors(login);
            }
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const loginMutation = graphql_tag_1.default `
    mutation LoginMutation($email: String!, $password: String!){
        login(email: $email, password: $password){
            path
            message
        }
    }
`;
exports.LoginController = react_apollo_1.graphql(loginMutation)(C);
//# sourceMappingURL=index.js.map