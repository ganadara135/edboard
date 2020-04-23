import gql from 'graphql-tag';
import { CreateListingMutationVariables, CreateListingMutation } from '../../schemaTypes';
import { graphql } from 'react-apollo';




const CREATE_LISTING_MUTATION = gql`
    mutation CreateListingMutation(
        $name: String!
        $category: String!
        $description: String!
        $price: Int!
        $beds: Int!
        $guests: Int!
        $latitude: Float!
        $longitude: Float!
        $amenities: [String!]!
    ) {
        createListing(
            input: {
                name: $name
                category: $category
                description: $description
                price: $price
                beds: $beds
                guests: $guests
                latitude: $latitude
                longitude: $longitude
                amenities: $amenities
            }
        )
    }
`;

export interface NewPropsCreateListing {
    createListing: (variables: CreateListingMutationVariables) => void;
}


export const withCreateListing = graphql<
    any,
    CreateListingMutation,
    CreateListingMutationVariables,
    NewPropsCreateListing
    >(CREATE_LISTING_MUTATION, {
        props: ({mutate}) => ({
            createListing: async (variables) => {
                if (!mutate) {
                    return;
                }

                const response = await mutate({
                    variables
                });

                console.log(response);
            }
        })
    });