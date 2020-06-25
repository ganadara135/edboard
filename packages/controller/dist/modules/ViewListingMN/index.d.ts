import * as React from "react";
import { ViewListingMNQuery_viewListingMN } from '../../schemaTypes';
export interface WithViewListing {
    listing: ViewListingMNQuery_viewListingMN | null;
    loading: boolean;
}
interface Props {
    yearName: number;
    children: (data: WithViewListing) => JSX.Element | null;
}
export declare class ViewListingMNController extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
