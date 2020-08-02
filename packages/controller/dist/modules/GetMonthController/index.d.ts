import * as React from "react";
import { EditMonthMutationVariables } from '../../schemaTypes';
export interface WithGetMonth {
    getData: EditMonthMutationVariables | null;
    loading: boolean;
}
interface Props {
    m_id: string;
    children: (data: WithGetMonth) => JSX.Element | null;
}
export declare class GetMonthController extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
