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
            const { data: { login } // : {sessionId, errors}}
             } = await this.props.mutate({
                variables: values
            });
            // console.log("sessionId: ", sessionId)
            // console.log("errors: ", errors)
            console.log("login.errors: ", login.errors);
            // const {chk} = login as LoginMutation_login;
            // const error : LoginMutation | undefined = login;
            return null;
        };
    }
    // submit = MyController({email:'', name:''});
    render() {
        return this.props.children({ submit: this.submit });
    }
}
// const loginMutation = gql`
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
// interface Props {    // 아래와 같음; interface == type  의미는 같으나, 작동안되기도 함, interface 로 통일
// // type Props = {
//   onSessionId?: (sessionId: string) => void;
//   children: (
//     data : {
//       submit: (
//         values: LoginMutationVariables
//       //   ) => Promise< any| null>;
//       ) => Promise<{[key: string]: string }| null>;
//     }
//    ) => JSX.Element | null;
// }
// export const LoginController: React.FC<Props> = (props) => {
// // export function LoginController(props : Props): React.FC<Props> {
//   const [login, {data, loading, error }] = useMutation(LOGIN_MUTATION);
//   console.log("response : ", login)
//   console.log("data : ", data)
//   console.log("loading : ", loading)
//   console.log("error : ", error)
//   // const mySubmit : any = '한글입력';
//   // const mySubmit = data; 
//   // return mySubmit;//  
//   // React.Children
//   return props.children({ submit: data});
// }
// const MyController: React.FC<Props> = (props) => {
// // export function LoginController(props : Props): React.FC<Props> {
//   const [login, {data, loading, error }] = useMutation(LOGIN_MUTATION);
//   console.log("response : ", login)
//   console.log("data : ", data)
//   console.log("loading : ", loading)
//   console.log("error : ", error)
//   // React.Children
//   return props.children({ submit: data});
// }
//# sourceMappingURL=index.js.map