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
import { YearToMonthMN }  from "../../entity/YearToMonthMN";
// import { createQueryBuilder } from 'typeorm';

import {InsertYearMutationArgs,  ErrorReponse} from "../../myTypes";


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
          message: "fail: edboard is null or undefined",
          path: "edboard.id"
        }
      }
      if(!yeargoals){  // null or undefined
        return {
          message: "fail: yeargoals is null or undefined",
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
  },
  
  
  Query: {
    yearGoalQuery: async () =>{
      const returnVal = await YearGoal.find({
        relations:['edboard','ymmns','ymmns.ygid']
      });
      console.log("chk : ", returnVal)
      return returnVal
    },
    
    yearGoalDeepQuery: async () => {

      const returnVal = await YearToMonthMN.find({        
        relations:['ygid','mgid',],    // ManyToOne 쪽에서 leftJoin 한다
        
        // relations:['monthgoals','ymmns','ymmns.yeargoal','edboard']
      })

      console.log("chk : ", returnVal)
      return returnVal;
    },
    
  }
  
};
