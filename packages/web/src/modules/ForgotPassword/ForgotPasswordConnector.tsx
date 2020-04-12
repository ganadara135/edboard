import * as React from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";
import {ForgotPasswordController} from '@abb/controller';


// container -> view
// container -> connector -> view
// controller -> connector -> view



export class ForgotPasswordConnector extends React.PureComponent {
    // dummySubmit = async (values: any) => {
    //     console.log(values);
    //     return null;
    // };

    render() {
      return (
      <ForgotPasswordController>
        {({ submit }) => <ForgotPasswordView submit={submit} />}
      </ForgotPasswordController>
      )
    }
}