import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// interface DestructureMessage {
//     location : {
//         state : {
//             message : string;
//         }
//     }
// }

export class EditPageDetail extends React.PureComponent<
    RouteComponentProps<{}>> {
    render() {
        console.log("this.props : ", this.props);
        // const {
        //     location: {state: {message}} 
        // } = this.props as unknown as DestructureMessage; // or as any;

        console.log("msg : ", this.props)
        return <h1>hi""""</h1>
        // return <h2>{message ? message : "hello"}</h2>;
    }
}
