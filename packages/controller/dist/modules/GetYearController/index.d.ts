import * as React from "react";
import { YearGoalInput } from '../../schemaTypes';
export interface WithGetYear {
    getData: YearGoalInput | null;
    loading: boolean;
}
interface Props {
    y_id: string;
    children: (data: WithGetYear) => JSX.Element | null;
}
export declare class GetYearController extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
