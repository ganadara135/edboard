import * as React from "react";
import {LoginController} from '@abb/controller';

import { LoginView } from "./ui/LoginView";


// container -> view
// container -> connector -> view
// controller -> connector -> view


export class LoginConnector extends React.PureComponent {
    // dummySubmit = async (values: any) => {
    //     console.log(values);
    //     return null;
    // };

    render() {
        return (
            // <LoginView submit={this.dummySubmit} />
        <LoginController >
           {({ submit }) => <LoginView submit={submit} />} 
        </LoginController>
  
        );
    }
}

// curl -v -H "Content-Type: application/json" -u 72fb5b2fc067d4e6c5f03a9b08b71e31c8b297b1: -X GET "https://api.sparkpost.com/api/v1/metrics/deliverability"