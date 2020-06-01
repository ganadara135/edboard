import * as React from 'react';
import {graphql, ChildMutateProps} from 'react-apollo';
import gql from 'graphql-tag';
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes';
import { normalizeErrors } from '../../utils/normalizeErrors';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';

interface Props {
    children: 
        (data: {submit: (values: RegisterMutationVariables) => Promise<NormalizedErrorMap | null>})
     => JSX.Element | null;
}

class C extends React.PureComponent<
 ChildMutateProps<Props, any, RegisterMutationVariables>
> {

    submit = async (values: RegisterMutationVariables) => {
        console.log(values);
        const {data: {register}} = await this.props.mutate({
            variables: values
        })
        console.log('response : ', register);

        if (register) {
            return normalizeErrors(register );
        }
        return null;
    };

    render() {
        return this.props.children({ submit: this.submit });
    }
}

const REGISTER_MUTATION = gql`
    mutation RegisterMutation($email: String!, $password: String!){
        register(email: $email, password: $password){
            path
            message
        }
    }
`;

export const InsertDataController = graphql<
    Props,
    RegisterMutation,
    RegisterMutationVariables
>(REGISTER_MUTATION)(C);