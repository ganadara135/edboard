"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordController = void 0;
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
const normalizeErrors_1 = require("../../utils/normalizeErrors");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log(values);
            const { data: { forgotPasswordChange } } = await this.props.mutate({
                variables: values
            });
            console.log('response : ', forgotPasswordChange);
            if (forgotPasswordChange) {
                return normalizeErrors_1.normalizeErrors(forgotPasswordChange);
            }
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const FORGOT_PASSWORD_CHANGE_MUTATION = graphql_tag_1.default `
    mutation ForgotPasswordChangeMutation($newPassword: String!, $key: String!){
        forgotPasswordChange(newPassword: $newPassword, key: $key){
            path
            message
        }
    }
`;
exports.ChangePasswordController = react_apollo_1.graphql(FORGOT_PASSWORD_CHANGE_MUTATION)(C);
//# sourceMappingURL=index.js.map