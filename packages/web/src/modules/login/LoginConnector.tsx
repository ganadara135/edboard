import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import {LoginController} from '@abb/controller';
import { LoginView } from "./ui/LoginView";



export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>> {
    
    onFinish = () => {
      this.props.history.push('/');
    }

    render() {
      console.log("Con Pros: ", this.props)
        return (

            // <LoginView submit={this.dummySubmit} />
        <LoginController> 
      
           {({ submit }) => (  <LoginView onFinish={this.onFinish} submit={submit} /> )}
         </LoginController>
  
        );
    }
}