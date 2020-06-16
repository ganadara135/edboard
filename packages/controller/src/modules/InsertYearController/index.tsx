import * as React from 'react';
import {graphql, ChildMutateProps} from 'react-apollo';
import gql from 'graphql-tag';
import { InsertYearMutation, InsertYearMutationVariables } from '../../schemaTypes';
import { normalizeErrors } from '../../utils/normalizeErrors';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';

interface Props {
    children: 
        (data: {submit: (values: InsertYearMutationVariables) => Promise<NormalizedErrorMap | null>})
     => JSX.Element | null;
}

class C extends React.PureComponent<
 ChildMutateProps<Props, any, InsertYearMutationVariables>
> {

    submit = async (values: InsertYearMutationVariables) => {
        console.log("cont: ", values);
        const {data: {insertGoal}} = await this.props.mutate({
            variables: values
            // variables: {insertGoal: values} as any 
        })
        console.log('response : ', insertGoal);

        if (insertGoal) {
            return normalizeErrors(insertGoal );
        }
        return null;
    };

    render() {
        return this.props.children({ submit: this.submit });
    }
}

const INSERTYEAR_MUTATION = gql`
    mutation InsertYearMutation($edboardName: String!, $yeargoals: YearGoalInput
    ){
        insertYear(edboardName: $edboardName, yeargoals: $yeargoals){
            path
            message
        }
    }
`;

export const InsertYearController = graphql<
    Props,
    InsertYearMutation,
    InsertYearMutationVariables
>(INSERTYEAR_MUTATION)(C);