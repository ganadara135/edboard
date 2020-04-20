import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
// import { element } from "prop-types";


export const resolvers: ResolverMap = {
    Mutation: {
        createListing: async (_, {input}, {session}) => {
            console.log(session);

            if (!session.userId) {
                // user is not logged in
                throw new Error("not authenticated");
            }

            const list = await Listing.create({
            // await Listing.create({
                ...input as Listing, // 이게 핵심,  This is main point. This makes to understand Array Like Object(pseudo array)
               name: "",
               pictureUrl: "",
               userId: session.userId
            }).save();  // .save();
  
        
             
            console.log("list : ", list)           
            // // 유사배열 처리 부분
            // Array.from(list, () => console.log("el.save()"))
            Array.prototype.forEach.call(list, (el: any) => console.log("mmmm : ", el) )

             


            
            return true;
        }
    }
}