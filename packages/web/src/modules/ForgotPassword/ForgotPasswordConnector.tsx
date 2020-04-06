import * as React from "react";
// import {LoginController} from '@abb/controller';

// import { RegisterConnector } from "../../modules/register/RegisterConnector";
// import { LoginConnector } from "../modules/login/LoginConnector";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";


// container -> view
// container -> connector -> view
// controller -> connector -> view



export class ForgotPasswordConnector extends React.PureComponent {
    dummySubmit = async (values: any) => {
        console.log(values);
        return null;
    };

    render() {
      return <ForgotPasswordView submit={this.dummySubmit} />
    }
}