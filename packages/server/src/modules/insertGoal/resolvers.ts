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

      // console.log("EDboard: ", EDboard.name)
      // console.log("YearGoal: ", YearGoal.name)
      // console.log('parent: ', parent)   
      // console.log('context: ', context)
      // console.log('info: ', info )
      const { name, description, yeargoals  } = args;
      console.log("체크: ", name, description, yeargoals )
      console.log('yeargoals: ', yeargoals);
      console.log('args: ', args);

      const yearGoalVal = yeargoals?.pop();
  
      // const returnVal = await YearGoal.create({
      //   goal: yearGoalVal?.goal, 
      //   description: yearGoalVal?.description,
      //   // edboard: this
      // } as any ).save()

      // console.log("returnVal:", returnVal);
      // console.log("returnVal.goal:", returnVal.goal);
      const yr = new YearGoal();
      yr.goal = yearGoalVal?.goal;
      yr.description = yearGoalVal?.description as string;
      await yr.save();

      
      const ed = new EDboard();
      ed.name = name as string;
      ed.description = description as string;
      // OneToMany 는 테이블에 칼럼은 생성 안 됨  
      ed.yeargoals = [yr]   // 이걸해야 YearGoal edboardid 필드에 값이 생성됨

      await ed.save();
      console.log('ed: ', ed)
      console.log('ed.yeargoals: ', ed.yeargoals)

  

      // const edboard = await EDboard.create({
      //   ...args,
      //   // include: [{yeargoals: YearGoal}]
      //   yeargoals: [
      //     yr
      //   ]
      //   // name,
      //   // description,
      //   // returnVal
      //   // yeargoals: returnVal
      //   // yeargoals: YearGoal as YearGoal
      //   // yeargoals: yearGoal // as any // as any
      // } as any).save();
 // .save();

      // console.log(edboard);
      // console.log("isArray: "+ Array.isArray(edboard))

      // return null;
    }
  },
  
  Query: {
    edboardQuery: async () => {
      // EDboard.find();
      // const returnVal = await EDboard.find();
      const returnVal = await EDboard.find({
        relations:['yeargoals'],
      })
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
