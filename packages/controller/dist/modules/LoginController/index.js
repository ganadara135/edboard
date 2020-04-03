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
            const { data: login } = await this.props.mutate({
                variables: values
            });
            // console.log("response: ", errors, sessionId);
            console.log("response: ", login);
            //   if (errors) {
            //     // show errors
            //     // [{path: 'email': message: 'inval...'}]
            //     // {email: 'invalid....'}
            //     return normalizeErrors(errors);
            //   }
            //   if (sessionId && this.props.onSessionId) {
            //     this.props.onSessionId(sessionId);
            //   }
            //   await this.props.client.resetStore();
            return null;
        };
    }
    // console.log("toString() : ", response.toString())
    // console.log("valueOf() : ", response.valueOf())
    //   console.log('response : ', errors, sessionId);
    // const login = response.data?.login;
    // if (login !== undefined) {
    // if (errors){
    //     // show erros
    //     // [{path: 'email': message; 'inval...'}]
    //     // {email: 'invalid....'}
    //     // return normalizeErrors(login.login );
    //     // return normalizeErrors(login.errors as Error[] );
    //     return normalizeErrors(errors);
    // } 
    // if (sessionId && this.props.onSessionId) {
    //     this.props.onSessionId(sessionId);
    // }
    render() {
        return this.props.children({ submit: this.submit });
    }
}
const loginMutation = graphql_tag_1.default `
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
exports.LoginController = react_apollo_1.graphql(loginMutation)(C);
//# sourceMappingURL=index.js.map