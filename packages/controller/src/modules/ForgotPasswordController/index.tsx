import * as React from 'react';
import {graphql, ChildMutateProps} from 'react-apollo';
import gql from 'graphql-tag';
import { SendForgotPasswordEmailMutation, SendForgotPasswordEmailMutationVariables } from '../../schemaTypes';


interface Props {
    children: 
        (data: {submit: (values: SendForgotPasswordEmailMutationVariables) => Promise<null>})
     => JSX.Element | null;
}

class C extends React.PureComponent<
 ChildMutateProps<Props, SendForgotPasswordEmailMutation, SendForgotPasswordEmailMutationVariables>
> {

    submit = async (values: SendForgotPasswordEmailMutationVariables) => {
        console.log(values);
        const response = await this.props.mutate({
            variables: values
        })
        console.log('response : ', response);

        // if (response) {
        //     return normalizeErrors(register );
        // }
        return null;
    };

    render() {
        return this.props.children({ submit: this.submit });
    }
}

const FORGOT_PASSWORD_MUTATION = gql`
    mutation SendForgotPasswordEmailMutation($email: String!){
        sendForgotPasswordEmail(email: $email)
    }
`;

export const ForgotPasswordController = graphql<
    Props,
    SendForgotPasswordEmailMutation,
    SendForgotPasswordEmailMutationVariables
>(FORGOT_PASSWORD_MUTATION)(C);