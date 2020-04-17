import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";


export const resolvers: ResolverMap = {
    Mutation: {
        createListing: async (_, {input}, {session}) => {
            console.log(session);
            console.log(" 에러 체크 ")
            // const listSave = await
            await Listing.create({
                ...input,
                pictureUrl: "",
                userId: session.userId
            })  // .save();

            console.log(" .save()   -------------- ")
            // await listSave.save();
            //  await user.save();

            return true;
        }
    }
}