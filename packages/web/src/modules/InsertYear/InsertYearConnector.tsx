import * as React from "react";
// import {InsertYearController} from '@abb/controller';
// import { InsertYearView } from "./ui/InsertYearView";
import { RouteComponentProps } from "react-router-dom";

export class InsertYearConnector extends React.PureComponent<
    RouteComponentProps<{}>
> {
    onFinish = () => {
        this.props.history.push("/m/confirm-email", {
            message: "등록이 완료 됐습니다."
        });
    }

    dummySubmit = async (values: any) => {
        console.log(values);
        return null;
    };

    render() {      
        return (<div></div>
            // <InsertYearController >
            // {({ submit }) => <InsertYearView onFinish={this.onFinish} submit={submit} />} 
            // </InsertYearController>
        );
    }
}