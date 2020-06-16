import { ResolverMap } from "../../types/graphql-utils";

import { EDboard } from "../../entity/EDboard";
import {CreateEdBoardMutationArgs,  ErrorReponse} from "../../myTypes";

export const resolvers: ResolverMap = {
    Mutation: {
        createEDBoard: async ( 
          _,// parent,
          args :  CreateEdBoardMutationArgs,
          __, // context,
          ___, // info
    
        ): Promise<ErrorReponse> => {

            console.log('args : ', args);
            if(!args.name){  // null or undefined
                return {
                    message: "fail: edboard.name is null or undefined",
                    path: "args.name"
                }
            }
            const ed = new EDboard();
            ed.name = args.name as string;
            ed.description = args.description as string;
            // OneToMany 은 테이블에 칼럼은 생성 안 됨  
            // ed.yeargoals = [yr]   // 이걸해야 YearGoal edboardid 필드에 값이 생성됨

            await ed.save();
            console.log('ed: ', ed)
            console.log('ed.yeargoals: ', ed.yeargoals)

            return {
                message: "Succeed",
                path: "createEDBoard Mutation"
            }
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
    }
}