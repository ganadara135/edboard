import * as React from 'react';
// import { Button } from "react-native-elements";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent {
    // onPress = () => {
    //     console.log("button pressed");
    // };
    dummySubmit = async (values: any) => {
        console.log(values);

        return null;
    }

    render() {
        return <RegisterView submit={this.dummySubmit} />;
    }
}