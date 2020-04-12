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
            const { data: { login: { sessionId, errors } } } = await this.props.mutate({
                variables: values
            });
            console.log("sessionId: ", sessionId);
            console.log("errors: ", errors);
            if (errors) {
                return normalizeErrors_1.normalizeErrors(errors);
            }
            if (sessionId && this.props.onSessionId) {
                this.props.onSessionId(sessionId);
            }
            return null;
        };
    }
    // submit = MyController({email:'', name:''});
    render() {
        return this.props.children({ submit: this.submit });
    }
}
// don't put any comments on gql sentenses very above //  gql 문장 바로 위에는 아무 코멘트 문 넣지 마라, 아무 에러 메시지도 없이 생성하지도 않는다
const LOGIN_MUTATION = graphql_tag_1.default `
    mutation LoginMutation($email: String!, $password: String!){
        login(email: $email, password: $password){
            errors {
                path
                message
            }
            sessionId
        }
    }
`;
exports.LoginController = react_apollo_1.graphql(LOGIN_MUTATION)(C);
//# sourceMappingURL=index.js.map