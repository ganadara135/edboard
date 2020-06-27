import * as React from "react";
import { ViewListingQuery_viewListing } from '../../schemaTypes';
export interface WithViewListingRaw {
    listing: ViewListingQuery_viewListing | null;
    loading: boolean;
}
interface Props {
    yearName: number;
    children: (data: WithViewListingRaw) => JSX.Element | null;
}
export declare class ViewListingController extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
