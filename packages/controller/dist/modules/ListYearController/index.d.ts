import * as React from "react";
export interface WithListYear {
    listing: (number | null)[] | null;
    loading: boolean;
}
interface Props {
    yearName: number;
    children: (data: WithListYear) => JSX.Element | null;
}
export declare class ListYearController extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
