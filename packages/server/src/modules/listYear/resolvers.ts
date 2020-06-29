import { ResolverMap } from "../../types/graphql-utils";
import { YearGoal } from "../../entity/YearGoal";


export const resolvers: ResolverMap = {
  Query: {
    listYearQuery: async (_, { yearName }
      )  => {

      let returnVal;
      if(yearName){
        returnVal = await YearGoal.find({
          where:{year: yearName}
        });
      }else{
        returnVal = await YearGoal.find();
      }

      console.log("chk : ", returnVal)
      const yearListVal = returnVal.map(val => val.year)
      return yearListVal;
    }
  }
};