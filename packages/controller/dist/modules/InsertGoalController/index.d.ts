import * as React from 'react';
import { InsertGoalMutationVariables } from '../../schemaTypes';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';
interface Props {
    children: (data: {
        submit: (values: InsertGoalMutationVariables) => Promise<NormalizedErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const InsertGoalController: React.ComponentClass<Props, any>;
export {};
