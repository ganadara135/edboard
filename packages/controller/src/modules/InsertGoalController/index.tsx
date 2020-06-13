import * as React from 'react';
import {graphql, ChildMutateProps} from 'react-apollo';
import gql from 'graphql-tag';
import { InsertGoalMutation, InsertGoalMutationVariables } from '../../schemaTypes';
import { normalizeErrors } from '../../utils/normalizeErrors';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';

interface Props {
    children: 
        (data: {submit: (values: InsertGoalMutationVariables) => Promise<NormalizedErrorMap | null>})
     => JSX.Element | null;
}

class C extends React.PureComponent<
 ChildMutateProps<Props, any, InsertGoalMutationVariables>
> {

    submit = async (values: InsertGoalMutationVariables) => {
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

const INSERTGOAL_MUTATION = gql`
    mutation InsertGoalMutation($name: String, $description: String, $yeargoals: YearGoalInput
    ){
        insertGoal(name: $name ,description: $description , yeargoals: [$yeargoals]){
            path
            message
        }
    }
`;

export const InsertGoalController = graphql<
    Props,
    InsertGoalMutation,
    InsertGoalMutationVariables
>(INSERTGOAL_MUTATION)(C);