export const typeDefs = ["type Mutation {\n  createEDBoard(name: String, description: String): IErrorReponse\n  insertMonth(month: Int!, goal: Float!, yearName: Int!, description: String): IErrorReponse\n  insertYear(edboardName: String!, yeargoals: YearGoalInput): IErrorReponse\n}\n\ntype IEDBoard {\n  id: ID!\n  name: String\n  description: String\n  yeargoals: [IYearGoal]\n}\n\ntype Query {\n  edboardQuery: [IEDBoard]\n  monthGoalQuery: [IMonthGoal]\n  yearGoalQuery: [IYearGoal]\n  yearGoalDeepQuery: [IYearToMonthMN]\n  viewListingYear(yearName: Int!): IListingYear\n}\n\ntype IMonthGoal {\n  id: ID!\n  month: Int!\n  goal: Float!\n  description: String\n  ymmns: [IYearToMonthMN!]\n}\n\ninput YearGoalInput {\n  year: Int\n  goal: Int\n  description: String\n}\n\ntype IYearGoal {\n  id: ID!\n  year: Int!\n  goal: Int!\n  description: String\n  ymmns: [IYearToMonthMN]\n  edboard: IEDBoard\n}\n\ntype IYearToMonthMN {\n  id: ID\n  ygid: IYearGoal\n  mgid: IMonthGoal\n  description: String\n}\n\ntype IErrorReponse {\n  ok: Boolean\n  path: String\n  message: String\n}\n\ntype IListingYear {\n  mnInfo: [IYearToMonthMN]\n  monthInfo: [IMonthGoal]\n  yearInfo: [IYearGoal]\n}\n\ntype Error {\n  path: String!\n  message: String!\n}\n"];
/* tslint:disable */

export interface Query {
  edboardQuery: Array<IEDBoard> | null;
  monthGoalQuery: Array<IMonthGoal> | null;
  yearGoalQuery: Array<IYearGoal> | null;
  yearGoalDeepQuery: Array<IYearToMonthMN> | null;
  viewListingYear: IListingYear | null;
}

export interface ViewListingYearQueryArgs {
  yearName: number;
}

export interface IEDBoard {
  id: string;
  name: string | null;
  description: string | null;
  yeargoals: Array<IYearGoal> | null;
}

export interface IYearGoal {
  id: string;
  year: number;
  goal: number;
  description: string | null;
  ymmns: Array<IYearToMonthMN> | null;
  edboard: IEDBoard | null;
}

export interface IYearToMonthMN {
  id: string | null;
  ygid: IYearGoal | null;
  mgid: IMonthGoal | null;
  description: string | null;
}

export interface IMonthGoal {
  id: string;
  month: number;
  goal: number;
  description: string | null;
  ymmns: Array<IYearToMonthMN>;
}

export interface IListingYear {
  mnInfo: Array<IYearToMonthMN> | null;
  monthInfo: Array<IMonthGoal> | null;
  yearInfo: Array<IYearGoal> | null;
}

export interface Mutation {
  createEDBoard: IErrorReponse | null;
  insertMonth: IErrorReponse | null;
  insertYear: IErrorReponse | null;
}

export interface CreateEdBoardMutationArgs {
  name: string | null;
  description: string | null;
}

export interface InsertMonthMutationArgs {
  month: number;
  goal: number;
  yearName: number;
  description: string | null;
}

export interface InsertYearMutationArgs {
  edboardName: string;
  yeargoals: YearGoalInput | null;
}

export interface IErrorReponse {
  ok: boolean | null;
  path: string | null;
  message: string | null;
}

export interface YearGoalInput {
  year: number | null;
  goal: number | null;
  description: string | null;
}

export interface Error {
  path: string;
  message: string;
}
