import * as React from 'react';
import {graphql, ChildMutateProps} from 'react-apollo';
import gql from 'graphql-tag';
import { LoginMutation, LoginMutationVariables,  } from '../../schemaTypes';
// import { normalizeErrors } from '../../utils/normalizedErrors';



interface Props {
    onSessionId?: (sessionId: string) => void;
    children: (
      data: {
        submit: (
          values: LoginMutationVariables
        //   ) => Promise< any| null>;
        ) => Promise<{[key: string]: string }| null>;
      }
    ) => JSX.Element | null;
}


class C extends React.PureComponent<
 ChildMutateProps<Props, LoginMutation, LoginMutationVariables>
> {
    submit = async (values: LoginMutationVariables) => {
        console.log(values);
        const {
            data: 
               login 
            
          } = await this.props.mutate({
            variables: values
          });
         // console.log("response: ", errors, sessionId);
         console.log("response: ", login)
      
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

const loginMutation = gql`
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


export const LoginController = graphql<
    Props,
    LoginMutation,
    LoginMutationVariables
>(loginMutation)(C);