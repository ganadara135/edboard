import * as React from 'react';
// import { Button } from "react-native-elements";
// import {RegisterController} from "@abb/controller";
import {LoginController} from "../../../controller";
import { LoginView } from "./ui/LoginView";

export class LoginConnector extends React.PureComponent {
    // onPress = () => {
    //     console.log("button pressed");
    // };
    // dummySubmit = async (values: any) => {
    //     console.log(values);

    //     return null;
    // }

    render() {
        return (
        <LoginController>
            {
                ({submit}) => <LoginView submit={submit} />
            }
        </LoginController>
        );
        
        // return <RegisterView submit={this.dummySubmit} />;
    }
}