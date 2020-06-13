/// <reference types="react" />
import { CreateListingMutationVariables } from '../../schemaTypes';
export interface NewPropsCreateListing {
    createListing: (variables: CreateListingMutationVariables) => void;
}
export declare const withCreateListing: (WrappedComponent: import("react").ComponentType<any>) => import("react").ComponentClass<any, any>;
