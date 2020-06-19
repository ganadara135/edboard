import * as React from 'react';
import { InsertMonthMutationVariables } from '../../schemaTypes';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';
interface Props {
    children: (data: {
        submit: (values: InsertMonthMutationVariables) => Promise<NormalizedErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const InsertMonthController: React.ComponentClass<Props, any>;
export {};
