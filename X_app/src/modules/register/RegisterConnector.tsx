import * as React from 'react';
// import { Button } from "react-native-elements";
import {RegisterController} from "@abb/controller";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent {
    // onPress = () => {
    //     console.log("button pressed");
    // };
    // dummySubmit = async (values: any) => {
    //     console.log(values);

    //     return null;
    // }

    render() {
        return (
        <RegisterController>
            {
                ({submit}) => <RegisterView submit={submit} />
            }
        </RegisterController>
        );
        
        // return <RegisterView submit={this.dummySubmit} />;
    }
}