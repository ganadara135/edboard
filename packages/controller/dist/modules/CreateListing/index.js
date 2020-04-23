"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const react_apollo_1 = require("react-apollo");
const CREATE_LISTING_MUTATION = graphql_tag_1.default `
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
exports.withCreateListing = react_apollo_1.graphql(CREATE_LISTING_MUTATION, {
    props: ({ mutate }) => ({
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
//# sourceMappingURL=index.js.map