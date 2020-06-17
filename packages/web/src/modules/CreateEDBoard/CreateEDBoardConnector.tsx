import * as React from "react";
import {CreateEDBoardController} from '@abb/controller';
import { CreateEDBoardView } from "./ui/CreateEDBoardView";
import { RouteComponentProps } from "react-router-dom";

// export const RegisterConnector = () => <RegisterView/>;

export class CreateEDBoardConnector extends React.PureComponent
<
    RouteComponentProps<{}>
> 
{
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
        return (
            <CreateEDBoardController >
                {({ submit }) => <CreateEDBoardView onFinish={this.onFinish} submit={submit} />} 
            </CreateEDBoardController>
        );
        
    }
}