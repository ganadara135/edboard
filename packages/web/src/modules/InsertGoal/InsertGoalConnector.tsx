import * as React from "react";
import {InsertGoalController} from '@abb/controller';


import { InsertGoalView } from "./ui/InsertGoalView";
import { RouteComponentProps } from "react-router-dom";


// export const RegisterConnector = () => <RegisterView/>;

export class InsertGoalConnector extends React.PureComponent
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
        // return  <div><h1 style={{color: 'red'}}>이부분이 맞나?</h1></div>
                
        return (
            <InsertGoalController >
            {({ submit }) => <InsertGoalView onFinish={this.onFinish} submit={submit} />} 
            </InsertGoalController>
        );
        
    }
}