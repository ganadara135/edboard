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
      console.log("Con Pros: ", this.props)
        return (

            // <LoginView submit={this.dummySubmit} />
        <LoginController> 
      
           {({ submit }) => (  <LoginView submit={submit || console.log("Con: ", submit)} /> )}
         </LoginController>
  
        );
    }
}