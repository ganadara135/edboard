import { ResolverMap } from "../../types/graphql-utils";
import { EDboard } from "../../entity/EDboard";


export const resolvers: ResolverMap = {
  Query: {
    listEDboardQuery: async (_, // { boardName }
      )  => {
      
      // console.log("boardName : ", boardName)
      let returnVal = null;
      returnVal = await EDboard.find()

      const listVal = returnVal.map(val => val.name)
      return listVal;
    }
  }
};