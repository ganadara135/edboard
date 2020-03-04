import * as React from "react";
import {RegisterController} from '@abb/controller';

import { RegisterView } from "./ui/RegisterView";


// container -> view
// container -> connector -> view
// controller -> connector -> view


// export const RegisterConnector = () => <RegisterView/>;

export class RegisterConnector extends React.PureComponent {
    // dummySubmit = async (values: any) => {
    //     console.log(values);
    //     return null;
    // };

    render() {
        return (
        <RegisterController >
           {({ submit}: {submit: any}) => <RegisterView submit={submit} />}
        </RegisterController>
  
        );
    }
}