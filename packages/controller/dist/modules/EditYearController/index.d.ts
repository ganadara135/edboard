import * as React from 'react';
import { EditYearMutationVariables } from '../../schemaTypes';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';
interface Props {
    children: (data: {
        submit: (values: EditYearMutationVariables) => Promise<NormalizedErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const EditYearController: React.ComponentClass<Props, any>;
export {};
