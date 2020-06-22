import * as React from "react";
import { InsertMonthController } from '@abb/controller';
// import { InsertMonthController } from '../../../../controller/dist/modules/InsertMonthController';  // '../  /controller/src/index';
// import {InsertYearController} from '@abb/controller';
// import { InsertMonthView } from "./ui/InsertMonthView";
import { RouteComponentProps } from "react-router-dom";

export class InsertMonthConnector extends React.PureComponent<
    RouteComponentProps<{}>
> {
    onFinish = () => {
        this.props.history.push("/m/confirm-email", {
            message: "등록이 완료 됐습니다."
        });
    }

    render() {      
        return (
            <InsertMonthController >
            {/* {({ submit }) => <InsertMonthView onFinish={this.onFinish} submit={submit} />}  */}
            </InsertMonthController>
        );
    }
}