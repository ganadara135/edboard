import { getConnectionOptions, createConnection } from "typeorm";
// import { User } from "../entity/User";
// import { Listing } from "../entity/Listing";

export const createTypeormConn = async () => {
  console.log("check DB NODE_ENV : ", process.env.NODE_ENV)
  console.log("check DATABASE_URL : ", process.env.DATABASE_URL)
  // ormconfig.json 에서 읽어옮
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  console.log("체크 connectionOption : ", connectionOptions)
  return process.env.NODE_ENV === "production"
   ? createConnection({
      ...connectionOptions,
      url: process.env.DATABASE_URL as string,
      name: "production"
    } as any)
   : createConnection({
    ...connectionOptions,
    url: process.env.DATABASE_URL as string,
    name: "development"
  } as any)
}  