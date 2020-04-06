import * as React from 'react';
// import { Button } from "react-native-elements";
// import {RegisterController} from "@abb/controller";
// import {SecureStore} from 'expo';
import * as SecureStore from 'expo-secure-store';
import {LoginController} from "../../../controller";
import { LoginView } from "./ui/LoginView";
import { SID_KEY } from '../shared/constants';

export class LoginConnector extends React.PureComponent {
    
    saveSessionId = (sid: string) => {
        console.log("sid : ", sid)
        SecureStore.setItemAsync(SID_KEY, sid)
    }

    render() {
        
        return (
        <LoginController onSessionId={this.saveSessionId}>
            {
                ({submit}) => <LoginView submit={submit} />
            }
        </LoginController>
        );
        
        // return <RegisterView submit={this.dummySubmit} />;
    }
}