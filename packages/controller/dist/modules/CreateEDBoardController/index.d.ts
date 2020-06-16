import * as React from 'react';
import { CreateEDBoardMutationVariables } from '../../schemaTypes';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';
interface Props {
    children: (data: {
        submit: (values: CreateEDBoardMutationVariables) => Promise<NormalizedErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const CreateEDBoardController: React.ComponentClass<Props, any>;
export {};
