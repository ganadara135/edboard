import * as React from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export class DemoDelete extends React.PureComponent {
    render() {
        return (
            <Mutation
                mutation={gql`
                    mutation {
                        deleteListing(id: "3f26e476-a9d7-4b58-b38f-86b5f8257170")
                    }
                `}
            >
                {(mutate: () => void) => <button onClick={() => mutate()}>delete listing</button>}
            </Mutation>
        );
    }
}