import * as React from 'react';
import {graphql, ChildMutateProps} from 'react-apollo';
import gql from 'graphql-tag';
import {LoginMutation,   LoginMutationVariables     } from '../../schemaTypes';
import { normalizeErrors } from '../../utils/normalizeErrors';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';

// import { useMutation } from '@apollo/react-hooks';



interface Props {
    onSessionId?: (sessionId: string) => void;
    children: (
      data: {
        submit: (
          values: LoginMutationVariables
        //   ) => Promise< any| null>;
        ) => Promise<NormalizedErrorMap | null>;
      }
    ) => JSX.Element | null;
}


class C extends React.PureComponent<
 ChildMutateProps<Props, any, LoginMutationVariables>
> {
    submit = async (values: LoginMutationVariables) => {
        console.log(values);
        const {
          data: {login: {sessionId, errors}}
        } = await this.props.mutate({
            variables: values
        });
        console.log("sessionId: ", sessionId)
        console.log("errors: ", errors)
        
        if (errors) {
            return normalizeErrors(errors);
        }

        if (sessionId && this.props.onSessionId) {
            this.props.onSessionId(sessionId);
        }

        return null;
    };
    // submit = MyController({email:'', name:''});
    
    render() {
        return this.props.children({ submit: this.submit });
    }
}

// don't put any comments on gql sentenses very above //  gql 문장 바로 위에는 아무 코멘트 문 넣지 마라, 아무 에러 메시지도 없이 생성하지도 않는다


const LOGIN_MUTATION = gql`
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
>(LOGIN_MUTATION)(C);