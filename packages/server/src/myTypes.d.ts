export type typeDefs = ["type Mutation {\n  insertGoal(name: String, description: String, yeargoals: [YearGoalInput]): [Error!]\n  createListing(input: CreateListingInput!): Boolean!\n  deleteListing(id: String!): Boolean!\n  sendForgotPasswordEmail(email: String!): Boolean\n  forgotPasswordChange(newPassword: String!, key: String!): [Error!]\n  login(email: String!, password: String!): LoginResponse!\n  logout: Boolean\n  register(email: String!, password: String!): [Error!]\n}\n\ninput YearGoalInput {\n  goal: String!\n  description: String\n}\n\ntype YearGoal {\n  id: String!\n  goal: String!\n  description: String\n  ymmns: [YearToMonthMN]\n  edboard: EDBoard\n}\n\ntype YearToMonthMN {\n  ygid: YearGoal\n  mgid: MonthGoal\n  description: String\n}\n\ntype MonthGoal {\n  id: String!\n  month: String!\n  goal: String!\n  ymmns: [YearToMonthMN]\n}\n\ntype EDBoard {\n  id: String!\n  name: String\n  description: String\n  yeargoals: [YearGoal]\n}\n\ntype Query {\n  edboardQuery: [EDBoard]\n  yeargoalQuery: [YearGoal]\n  monthgoalQuery: [MonthGoal]\n  findListings: [Listing!]!\n  me: User\n}\n\ninput CreateListingInput {\n  name: String!\n  category: String!\n  description: String!\n  price: Int!\n  beds: Int!\n  guests: Int!\n  latitude: Float!\n  longitude: Float!\n  amenities: [String!]!\n}\n\ntype Listing {\n  id: ID!\n  name: String!\n  category: String!\n  description: String!\n  price: Int!\n  beds: Int!\n  quests: Int!\n  latitude: Float!\n  longitude: Float!\n  amenities: [String!]!\n  pictureUrl: String!\n}\n\ntype LoginResponse {\n  errors: [Error!]\n  sessionId: String\n}\n\ntype Error {\n  path: String!\n  message: String!\n}\n\ntype User {\n  id: ID!\n  email: String!\n}\n"];
/* tslint:disable */

export interface Query {
  edboardQuery: Array<EDBoard> | null;
  yeargoalQuery: Array<YearGoal> | null;
  monthgoalQuery: Array<MonthGoal> | null;
  findListings: Array<Listing>;
  me: User | null;
}

export interface EDBoard {
  id: string;
  name: string | null;
  description: string | null;
  yeargoals: Array<YearGoal> | null;
}

export interface YearGoal {
  id: string;
  goal: string;
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
  month: string;
  goal: string;
  ymmns: Array<YearToMonthMN> | null;
}

export interface Listing {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  quests: number;
  latitude: number;
  longitude: number;
  amenities: Array<string>;
  pictureUrl: string;
}

export interface User {
  id: string;
  email: string;
}

export interface Mutation {
  insertGoal: Array<Error>;
  createListing: boolean;
  deleteListing: boolean;
  sendForgotPasswordEmail: boolean | null;
  forgotPasswordChange: Array<Error>;
  login: LoginResponse;
  logout: boolean | null;
  register: Array<Error>;
}

export interface InsertGoalMutationArgs {
  name: string | null;
  description: string | null;
  yeargoals: Array<YearGoalInput> | null;
}

export interface CreateListingMutationArgs {
  input: CreateListingInput;
}

export interface DeleteListingMutationArgs {
  id: string;
}

export interface SendForgotPasswordEmailMutationArgs {
  email: string;
}

export interface ForgotPasswordChangeMutationArgs {
  newPassword: string;
  key: string;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface RegisterMutationArgs {
  email: string;
  password: string;
}

export interface YearGoalInput {
  goal: string;
  description: string | null;
}

export interface Error {
  path: string;
  message: string;
}

export interface CreateListingInput {
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities: Array<string>;
}

export interface LoginResponse {
  errors: Array<Error>;
  sessionId: string | null;
}
