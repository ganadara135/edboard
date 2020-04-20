import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
// import { isAuthenticated } from "../../shared/isAuthenticated";


export const resolvers: ResolverMap = {
    Mutation: {
        deleteListing: async (_, {id}, { session}) => {
            console.log(session);
            
            // if (!session.userId) {
            //     throw new Error("not authenticated");
            // }

            // isAuthenticated(session);

            const listing = await Listing.findOne({ where: { id }});

            if (!listing) {
                throw new Error("does not exist");
            }

            if (session.userId !== listing.userId) {
                // log messages
                console.log(`this user ${
                    session.userId
                } is trying to delete a listing they don't own`
                );
                throw new Error("not authorized");
            }
            await Listing.remove(listing);
            return true;
        }
    }
}