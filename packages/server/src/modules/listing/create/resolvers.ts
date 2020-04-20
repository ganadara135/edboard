import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
// import { element } from "prop-types";


export const resolvers: ResolverMap = {
    Mutation: {
        createListing: async (_, {input}, {session}) => {
            console.log(session);
            const list = await Listing.create({
            // await Listing.create({
                ...input as Listing, // 이게 핵심,  This is main point. This makes to understand Array Like Object(pseudo array)
               name: "",
               pictureUrl: "",
               userId: session.userId
            }).save();  // .save();
            // Array.from(list,(el)=>console.log("el : ", el.id))
            // tslint:disable-next-line: only-arrow-functions
            Array.prototype.forEach.call(list, function(el: any) {
                console.log("mmmm : ", el) 
            });
            Array.prototype.forEach.call(list, (el: any) => console.log("mmmm : ", el) )
            // const popVal = Array.from(list).pop();
            // console.log("popVal : ", popVal)
            // [].forEach.call(list, element =>  );
            
            // Array.from(list,(el) => el.save())
            // console.log("list.lastIndexOf : ", list.lastIndexOf)
            // // console.log("list.every() : ", list..every(() => console.log("하드보일드")))
            
            console.log("list : ", list)
            // console.log("Array.from(list)[0] : ",Array.from(list)[0])
            // console.log("Array.from(list) : ",Array.from(list))
            // console.log("Array.from(list).length : ",Array.from(list).length)
            // console.log("Array.from(list).lastIndexOf : ",Array.from(list).lastIndexOf)
            // // 유사배열 
            // console.log(Array.from('foo'));
            // console.log(Array.from([1, 2, 3], x => x + x));
            // console.log(Array.from(list));
            
            // // 유사배열 처리 부분
            // Array.from(list, () => console.log("el.save()"))

             


            console.log("save()   -------------- ")
            return true;
        }
    }
}