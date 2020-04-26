import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import {LoginController} from '@abb/controller';
import { LoginView } from "./ui/LoginView";



export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>> {
    
    onFinish = () => {
      const {history, location: {state}} = this.props;
      console.log("this.props : ", this.props.location.state);
      console.log("state : ", state);
      // console.log("state.next : ", (state as any).next);
      // if (state && (state as any).next ) {
      //   return history.push((state as any).next);
      // }
      // this.props.history.push('/');

      
      history.push('/create-listing');
      // history.push('/');
    }

    render() {
      console.log("Location: ", this.props.location)
      console.log("Next Location: ", this.props.location.state)
        return (

            // <LoginView submit={this.dummySubmit} />
        <LoginController> 
      
           {({ submit }) => (  <LoginView onFinish={this.onFinish} submit={submit} /> )}
         </LoginController>
  
        );
    }
}