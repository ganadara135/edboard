"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordController = void 0;
const React = require("react");
const react_apollo_1 = require("react-apollo");
const graphql_tag_1 = require("graphql-tag");
class C extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = async (values) => {
            console.log(values);
            const response = await this.props.mutate({
                variables: values
            });
            console.log('response : ', response);
            // if (response) {
            //     return normalizeErrors(register );
            // }
            return null;
        };
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const FORGOT_PASSWORD_MUTATION = graphql_tag_1.default `
    mutation SendForgotPasswordEmailMutation($email: String!){
        sendForgotPasswordEmail(email: $email)
    }
`;
exports.ForgotPasswordController = react_apollo_1.graphql(FORGOT_PASSWORD_MUTATION)(C);
//# sourceMappingURL=index.js.map