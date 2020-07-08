import * as React from "react";
export interface WithListEDboard {
    listing: (string | null)[] | null;
    loading: boolean;
}
interface Props {
    children: (data: WithListEDboard) => JSX.Element | null;
}
export declare class ListEDboardController extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
