import { ResolverMap } from "../../types/graphql-utils";
import { YearToMonthMN } from "../../entity/YearToMonthMN";
import { YearGoal } from "../../entity/YearGoal";
import { MonthGoal } from "../../entity/MonthGoal";

import { ListingOrdered  } from "../../myTypes";
import {  getConnection } from "typeorm"


// select mn.*, y.*, m.*  from YearToMonthMNs as mn, MonthGoals as m, YearGoals as y WHERE y.id = mn.ygidId AND mn.mgidId = m.id;
export const resolvers: ResolverMap = {
  Query: {
    viewListing: async (_, { yearName }
      // ) => {
      ): Promise<ListingOrdered> => {

        const ordered = await getConnection().createQueryBuilder()
        .select("mn")
        .addSelect("y")
        .addSelect("m")
        .from(YearToMonthMN,"mn")
        .innerJoin(YearGoal,"y" ,"mn.ygid = y.id")
        .innerJoin(MonthGoal,"m" ,"mn.mgid = m.id")
        .where("y.year = :pyearName", { pyearName: yearName })
        .getRawMany()

      // const ordered = await YearToMonthMN.find({
      //   // relations:['ygid','mgid','ygid.ymmns','mgid.ymmns','ygid.ymmns.mgid'],      // 중요, OneToMany 시점 부터 안됨  'ygid.ymmns.mgid'
      //   relations:['ygid','mgid','ygid.ymmns','mgid.ymmns'],
      //   where: { year: yearName } 
      // });

      console.log("ordered: ", ordered)
      // return mnInfo;
      return {
        ordered: ordered as any,    // Very Important!!! It is different of TypeORM Entity and Graphql Type
      } 
    }
  }
};