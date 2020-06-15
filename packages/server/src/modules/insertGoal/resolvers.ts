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

import {InsertYearMutationArgs, InsertMonthMutationArgs, ErrorReponse} from "../../myTypes";


export const resolvers: ResolverMap = {
  Mutation: {
    insertYear: async ( 
      _,// parent,
      args :  InsertYearMutationArgs,
      __, // context,
      ___, // info

    ): Promise<ErrorReponse> => {
      const { edboardName, yeargoals  } = args;
      console.log("args: ", args)
      
      const edboard = await EDboard.findOne({name: edboardName});
      console.log("chk edboard: ", edboard);
      if(!edboard){  // null or undefined
        return {
          message: "fail: No edboard.id",
          path: "edboard.id"
        }
      }
      if(!yeargoals){  // null or undefined
        return {
          message: "fail",
          path: "yeargoals args"
        }
      }

      // const yearGoalVal = yeargoals?.pop();
      const yearGoalVal = yeargoals;
      
      const yr = new YearGoal();
      yr.goal = yearGoalVal?.goal as number;
      yr.year = yearGoalVal?.year as number;
      // yr.description = yearGoalVal?.description as string; 
      yr.edboard = edboard?.id as any;
      await yr.save();

      // const ed = new EDboard();
      // ed.name = name as string;
      // ed.description = description as string;
      // // OneToMany 은 테이블에 칼럼은 생성 안 됨  
      // ed.yeargoals = [yr]   // 이걸해야 YearGoal edboardid 필드에 값이 생성됨

      // await ed.save();
      // console.log('ed: ', ed)
      // console.log('ed.yeargoals: ', ed.yeargoals)

      return {
        message: 'succeed',
        path: 'insertYear Mutation'
      };
    },
    insertMonth: async (
      _, // parent,
      args : InsertMonthMutationArgs,
      __, // context,
      ___, // info
    ): Promise<ErrorReponse> => {
      // const {   } = args;
      console.log("args : ", args)
      const returnVal = await YearGoal.findOne(
        {year: args.yearName }
        // {relations:['yeargoals'],} // defaults is left join
      )
      console.log('returnVal :', returnVal)

      // const monthGoal = new MonthGoal();
      // monthGoal.goal = args?.goal as number;
      return {
        message: 'succeed',
        path: 'insertMonth Mutation'
      };
    }
  },
  
  Query: {
    edboardQuery: async () => {
      // EDboard.find();
      // const returnVal = await EDboard.find();
      const returnVal = await EDboard.find({
        relations:['yeargoals'], // defaults is left join
      })
      // console.log("chk : ", returnVal)
      return returnVal;
    },
    yearGoalQuery: async () => {
      const returnVal = await YearGoal.find({
        relations:['edboard', 'ymmns']
      });
      // console.log("chk : ", returnVal)
      return returnVal;
    },
    monthGoalQuery: async () => {
      const returnVal = await MonthGoal.find({
        relations:['ymmns']
      });
      // console.log("chk : ", returnVal)
      return returnVal;
    }
  }
  
};
