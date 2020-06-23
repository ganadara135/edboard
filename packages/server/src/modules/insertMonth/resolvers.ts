import { ResolverMap } from "../../types/graphql-utils";
import { MonthGoal } from "../../entity/MonthGoal";
import { YearGoal}  from "../../entity/YearGoal";
import { YearToMonthMN} from "../../entity/YearToMonthMN";

import { InsertMonthMutationArgs, IErrorReponse} from "../../myTypes";

export const resolvers: ResolverMap = {
    Mutation: {
        insertMonth: async (
            _, // parent,
            args : InsertMonthMutationArgs,
            __, // context,
            ___, // info
        ): Promise<IErrorReponse> => {
            // const {   } = args;
            console.log("args : ", args)
            const yearVal = await YearGoal.findOne(
              {year: args.yearName }
              // {relations:['yeargoals'],} // defaults is left join
            )
            console.log('yearVal :', yearVal)
            if(!yearVal){  // null or undefined
                return {
                  ok: false,
                  message: "yearName is null or undefined",
                  path: "args.yearName"
                }
            }

            const ymMN = new YearToMonthMN();
            // ymMN.yearid = yearVal?.id as number;
            // ymMN.yeargoal = yearVal?.id as number;
            

            const monthGoal = new MonthGoal();
            monthGoal.goal = args?.goal as number;
            monthGoal.month = args?.month as number;
            monthGoal.description = args?.description as string;
            monthGoal.ymmns = [ymMN];
            await monthGoal.save();
            // ymMN.monthid = monthGoal.id;
            ymMN.ygid = yearVal as YearGoal;
            ymMN.mgid = monthGoal as MonthGoal;
            // ymMN.description = monthGoal?.description as string;
            await ymMN.save();

            console.log("ymMN: ", ymMN);
            console.log("monthGoal: ", monthGoal);

            return {
              ok: true,
              message: 'succeed',
              path: 'insertMonth Mutation'
            };
        }        
    },
    Query: {
        monthGoalQuery: async () => {
            const returnVal = await MonthGoal.find({
                relations:['ymmns','ymmns.yeargoal','ymmns.monthgoal'],                
                // relations:['ymmns','ymmns.yeargoal','ymmns.monthgoal','ymmns.yeargoal.ymmns','ymmns.monthgoal.ymmns']
            });
            // console.log("chk : ", returnVal)
            return returnVal;
        }
    }

};
