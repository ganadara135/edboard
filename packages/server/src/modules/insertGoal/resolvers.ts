// import * as yup from "yup";
// import { validUserSchema } from "@abb/common";

import { ResolverMap } from "../../types/graphql-utils";
// import { User } from "../../entity/User";
// import { formatYupError } from "../../utils/formatYupError";
// import {  duplicateEmail, } from "./errorMessages";
// // import { createConfirmEmailLink } from "./createConfirmEmailLink";
// import { sendEmail } from "../../utils/sendEmail";
import { EDboard } from "../../entity/EDboard";
import { YearGoal}  from "../../entity/YearGoal";
import { MonthGoal } from "../../entity/MonthGoal";
// import { Query } from "typeorm/driver/Query";

import {InsertGoalMutationArgs} from "../../myTypes";


export const resolvers: ResolverMap = {
  Mutation: {
    insertGoal: async ( 
      _,// parent,
      args : InsertGoalMutationArgs,
      // { name, description }  : 
      __, // context,
      ___, // info

    ) => {
      // console.log("call insertGoal() hot reloading test")
      // // EDboard.
      // console.log("EDboard: ", EDboard.name)
      // console.log("YearGoal: ", YearGoal.name)
      // console.log('parent: ', parent)   
      // console.log('context: ', context)
      // console.log('info: ', info )
      const { name, description, yearGoal  } = args;
      console.log("체크: ", name, description, yearGoal )
      console.log('yearGoal: ', yearGoal);
      console.log('args: ', args);
      // console.log('yearGoal.pop(): ', yearGoal?.pop());
      // console.log('yearGoal.pop().goal: ', yearGoal?.pop()?.goal);
      // const goalYear = yearGoal?.pop()?.goal;
      // const descriptionYear = yearGoal?.pop()?.description;

      const yearGoalVal = yearGoal?.pop();
  

      // console.log(yearGoalVal?.goal,  yearGoalVal?.description)

      const returnVal = await YearGoal.create({
        goal: yearGoalVal?.goal, 
        description: yearGoalVal?.description,
        // edboard: this
      } as any ).save()

      // tslint:disable-next-line: no-shadowed-variable
      // const { YearGoal }: any = returnVal;
      // console.log("YearGoal: ", YearGoal)
      console.log("returnVal:", returnVal);
      console.log("returnVal.goal:", returnVal.goal);
      


      const edboard = EDboard.create({
        name,
        description,
        yeargoals: returnVal
        // yeargoals: YearGoal as YearGoal
        // yeargoals: yearGoal // as any // as any
      } as any) // .save();
 // .save();

      console.log(edboard);
      console.log("isArray: "+ Array.isArray(edboard))

      return null;
    }
  },
  
  Query: {
    edboardQuery: async () => {
      // EDboard.find();
      const returnVal = await EDboard.find();
      console.log("chk : ", returnVal)
      return returnVal;
    },
    yeargoalQuery: async () => {
      const returnVal = await YearGoal.find();
      console.log("chk : ", returnVal)
      return returnVal;
    },
    monthgoalQuery: async () => {
      const returnVal = await MonthGoal.find();
      console.log("chk : ", returnVal)
      return returnVal;
    }
  }
  
};
