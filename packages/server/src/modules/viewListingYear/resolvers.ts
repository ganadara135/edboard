// import * as yup from "yup";
// import { validUserSchema } from "@abb/common";

import { ResolverMap } from "../../types/graphql-utils";
// import { User } from "../../entity/User";
// import { formatYupError } from "../../utils/formatYupError";
// import {  duplicateEmail, } from "./errorMessages";
// // import { createConfirmEmailLink } from "./createConfirmEmailLink";
// import { sendEmail } from "../../utils/sendEmail";
// import { EDboard } from "../../entity/EDboard";
// import { YearGoal }  from "../../entity/YearGoal";
import { YearToMonthMN } from "../../entity/YearToMonthMN";
// import { createQueryBuilder } from 'typeorm';
// import {IListingYear, IYearToMonthMN  } from "../../myTypes";
// import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Query: {
    viewListingYear: async (_, // { yearName }
      ) => {
      const mnInfo = await YearToMonthMN.find({
        relations:['ygid','mgid'],
        // where: { yearName } 
      });

      console.log("mnInfo: ", mnInfo)
      return {
        mnInfo,
      } 
    }
  }
};