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


export const resolvers: ResolverMap = {
  Mutation: {
    insertGoal: async ( 
      parent,
      args,
      _,      // context,
      // info

    ) => {
      console.log("call inserGoal() hot reloading test")
      // EDboard.
      console.log("EDboard: ", EDboard.name)
      console.log("YearGoal: ", YearGoal.name)
      console.log('parent: ', parent)   
         
      console.log('aaa rgs: ', args)

      // console.log('context: ', context)
      


      // console.log('info: ', info )
      const { name, description } = args;

      console.log(name, description )
      
      return null

    }
      // _,
    //   // args: GQL.IRegisterOnMutationArguments,
    //   // { redis, url }
    // ) => {
    //   console.log("test 11111")
    //   try {
    //     await validUserSchema.validate(args, { abortEarly: false });
    //   } catch (err) {
    //     return formatYupError(err);
    //   }

    //   const { email, password } = args;
    //   console.log("test 222222")
    //   console.log("email : ", email)
    //   const userAlreadyExists = await User.findOne({
    //     where: { email },
    //     select: ["id"]
    //   });
    //   console.log("test 33333")
    //   if (userAlreadyExists) {
    //     return [
    //       {
    //         path: "email",
    //         message: duplicateEmail
    //       }
    //     ];
    //   }

    //   const user = User.create({
    //     email,
    //     password,
    //     // confirmed: true,
    //   });

    //   await user.save();

    //   if (process.env.NODE_ENV !== "test") {
    //     await sendEmail(
    //       email,
    //       "remove this part",
    //       // await createConfirmEmailLink(url, user.id, redis),
    //       "confirm email"
    //     );
    //   }

      // return null;
    // }
  }
};
