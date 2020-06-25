// import * as yup from "yup";
// import { validUserSchema } from "@abb/common";

import { ResolverMap } from "../../types/graphql-utils";
// import { sendEmail } from "../../utils/sendEmail";
// import { EDboard } from "../../entity/EDboard";
// import { YearGoal }  from "../../entity/YearGoal";
import { YearToMonthMN } from "../../entity/YearToMonthMN";
// import { createQueryBuilder } from 'typeorm';
import { ListingMN  } from "../../myTypes";

// import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Query: {
    viewListingMN: async (_, // { yearName }
      // ) => {
      ): Promise<ListingMN> => {
      const mnInfo = await YearToMonthMN.find({
        // relations:['ygid','mgid','ygid.ymmns','mgid.ymmns','ygid.ymmns.mgid'],      // 중요, OneToMany 시점 부터 안됨  'ygid.ymmns.mgid'
        relations:['ygid','mgid','ygid.ymmns','mgid.ymmns'],
        // where: { yearName } 
      });

      console.log("mnInfo: ", mnInfo)
      // return mnInfo;
      return {
        mnInfo: mnInfo as any,    // Very Important!!! It is different of TypeORM Entity and Graphql Type
        monthInfo: null,
        yearInfo: null
        // mnInfo: [IYearToMonthMN],
        // monthInfo: [IMonthGoal],
        // yearInfo: [IYearGoal]
      } 

      // return {
      //   ok: false,
      //   message: "input value is null or undefined",
      //   path: "yeargoals edboardName"
      // }
    }
  }
};