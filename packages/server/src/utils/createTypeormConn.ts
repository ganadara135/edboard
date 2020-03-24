import { getConnectionOptions, createConnection } from "typeorm";
import { User } from "../entity/User";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return process.env.NODE_ENV === "production"
   ? createConnection({
      ...connectionOptions,
      url: process.env.DATABASE_URL as string,
      entities: [User],
      name: "default"
    } as any)
   : createConnection({ ...connectionOptions, name: "default" });

  // const connectionOptions = await getConnectionOptions("production");
  // console.log("process.env.DATABASE_URL : ", process.env.DATABASE_URL)
  // return createConnection({
  //       ...connectionOptions,
  //       url: process.env.DATABASE_URL as string,
  //       entities: [User],
  //       name: "default"
  //     } as any)};
}  