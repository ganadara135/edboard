// import * as yup from "yup";
// import { validUserSchema } from "@abb/common";

import { ResolverMap } from "../../types/graphql-utils";
// import { User } from "../../entity/User";
// import { formatYupError } from "../../utils/formatYupError";
// import {  duplicateEmail, } from "./errorMessages";
// // import { createConfirmEmailLink } from "./createConfirmEmailLink";
// import { sendEmail } from "../../utils/sendEmail";
import { EDboard } from "../../entity/EDboard";
import { YearGoal } from "../../entity/YearGoal";
import { MonthGoal } from "../../entity/MonthGoal";
// import { Query } from "typeorm/driver/Query";
/// <reference path="../../types/schema.d.ts />
// import * as GQL from "schema.d.ts"    // "../../types/schema";


export const resolvers: ResolverMap = {
  Mutation: {
    insertGoal: async ( 
      parent,
      args,    // { name, description }  : IInsertGoalOnMutationArguments,
      _,      // context,
      // info

    ) => {
      console.log("call insertGoal() hot reloading test")
      // EDboard.
      console.log("EDboard: ", EDboard.name)
      console.log("YearGoal: ", YearGoal.name)
      console.log('parent: ', parent)   
      // console.log('context: ', context)
      
      // console.log('info: ', info )
      const { name, description, yearGoal } = args;
      console.log(name, description, yearGoal )

      const edboard = EDboard.create({
        name,
        description,
        // confirmed: true,
      });
      await edboard.save();

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
