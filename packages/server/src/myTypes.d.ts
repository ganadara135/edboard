export type typeDefs = ["type Mutation {\n  createEDBoard(name: String, description: String): IErrorReponse\n  insertMonth(month: Int!, goal: Float!, yearName: Int!, description: String): IErrorReponse\n  insertYear(edboardName: String!, yeargoals: YearGoalInput): IErrorReponse\n}\n\ntype Query {\n  edboardQuery: [EDBoard]\n  monthGoalQuery: [MonthGoal]\n  yearGoalQuery: [YearGoal]\n  yearGoalDeepQuery: [YearToMonthMN]\n  listYearQuery(yearName: Int): [Int]\n  viewListing(yearName: Int!): ListingOrdered\n  viewListingMN(yearName: Int!): ListingMN\n}\n\ninput YearGoalInput {\n  year: Int\n  goal: Int\n  description: String\n}\n\ntype IErrorReponse {\n  ok: Boolean\n  path: String\n  message: String\n}\n\ntype EDBoard {\n  id: ID!\n  name: String\n  description: String\n  yeargoals: [YearGoal]\n}\n\ntype YearGoal {\n  id: ID!\n  year: Int!\n  goal: Int!\n  description: String\n  ymmns: [YearToMonthMN]\n  edboard: EDBoard\n}\n\ntype YearToMonthMN {\n  id: ID\n  ygid: YearGoal\n  mgid: MonthGoal\n  description: String\n}\n\ntype MonthGoal {\n  id: ID!\n  month: Int!\n  goal: Float!\n  description: String\n  ymmns: [YearToMonthMN!]\n}\n\nscalar raw\n\ntype ListingOrdered {\n  ordered: [raw]\n}\n\ntype ListingMN {\n  mnInfo: [YearToMonthMN]\n  monthInfo: [MonthGoal]\n  yearInfo: [YearGoal]\n}\n\ntype Error {\n  path: String!\n  message: String!\n}\n"];
/* tslint:disable */

export interface Query {
  edboardQuery: Array<EDBoard> | null;
  monthGoalQuery: Array<MonthGoal> | null;
  yearGoalQuery: Array<YearGoal> | null;
  yearGoalDeepQuery: Array<YearToMonthMN> | null;
  listYearQuery: Array<number> | null;
  viewListing: ListingOrdered | null;
  viewListingMN: ListingMN | null;
}

export interface ListYearQueryQueryArgs {
  yearName: number | null;
}

export interface ViewListingQueryArgs {
  yearName: number;
}

export interface ViewListingMnQueryArgs {
  yearName: number;
}

export interface EDBoard {
  id: string;
  name: string | null;
  description: string | null;
  yeargoals: Array<YearGoal> | null;
}

export interface YearGoal {
  id: string;
  year: number;
  goal: number;
  description: string | null;
  ymmns: Array<YearToMonthMN> | null;
  edboard: EDBoard | null;
}

export interface YearToMonthMN {
  id: string | null;
  ygid: YearGoal | null;
  mgid: MonthGoal | null;
  description: string | null;
}

export interface MonthGoal {
  id: string;
  month: number;
  goal: number;
  description: string | null;
  ymmns: Array<YearToMonthMN>;
}

export interface ListingOrdered {
  ordered: Array<raw> | null;
}

export type raw = any;

export interface ListingMN {
  mnInfo: Array<YearToMonthMN> | null;
  monthInfo: Array<MonthGoal> | null;
  yearInfo: Array<YearGoal> | null;
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
