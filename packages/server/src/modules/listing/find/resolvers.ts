import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
// import { element } from "prop-types";


export const resolvers: ResolverMap = {
    Query: {
        findListings: async () => {
            
            return Listing.find();
        }
    }
}