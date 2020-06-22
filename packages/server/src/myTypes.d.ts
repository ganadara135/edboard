export const typeDefs = ["type Mutation {\n  createEDBoard(name: String, description: String): ErrorReponse\n  insertMonth(month: Int!, goal: Float!, yearName: Int!, description: String): ErrorReponse\n  insertYear(edboardName: String!, yeargoals: YearGoalInput): ErrorReponse\n}\n\ntype EDBoard {\n  id: ID!\n  name: String\n  description: String\n  yeargoals: [YearGoal]\n}\n\ntype Query {\n  edboardQuery: [EDBoard]\n  monthGoalQuery: [MonthGoal]\n  yearGoalQuery: [YearGoal]\n  yearGoalDeepQuery: [YearToMonthMN]\n}\n\ntype MonthGoal {\n  id: ID!\n  month: Int!\n  goal: Float!\n  description: String\n  ymmns: [YearToMonthMN!]\n}\n\ninput YearGoalInput {\n  year: Int\n  goal: Int\n  description: String\n}\n\ntype YearGoal {\n  id: ID!\n  year: Int!\n  goal: Int!\n  description: String\n  ymmns: [YearToMonthMN]\n  edboard: EDBoard\n}\n\ntype YearToMonthMN {\n  ygid: YearGoal\n  mgid: MonthGoal\n  description: String\n}\n\ntype ErrorReponse {\n  ok: Boolean\n  path: String\n  message: String\n}\n\ntype Error {\n  path: String!\n  message: String!\n}\n"];
/* tslint:disable */

export interface Query {
  edboardQuery: Array<EDBoard> | null;
  monthGoalQuery: Array<MonthGoal> | null;
  yearGoalQuery: Array<YearGoal> | null;
  yearGoalDeepQuery: Array<YearToMonthMN> | null;
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

export interface Mutation {
  createEDBoard: ErrorReponse | null;
  insertMonth: ErrorReponse | null;
  insertYear: ErrorReponse | null;
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

export interface ErrorReponse {
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
