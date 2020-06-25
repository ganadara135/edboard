export interface CreateEDBoardMutation_createEDBoard {
    __typename: "IErrorReponse";
    ok: boolean | null;
    message: string | null;
    path: string | null;
}
export interface CreateEDBoardMutation {
    createEDBoard: CreateEDBoardMutation_createEDBoard | null;
}
export interface CreateEDBoardMutationVariables {
    name?: string | null;
    description?: string | null;
}
export interface InsertMonthMutation_insertMonth {
    __typename: "IErrorReponse";
    ok: boolean | null;
    message: string | null;
    path: string | null;
}
export interface InsertMonthMutation {
    insertMonth: InsertMonthMutation_insertMonth | null;
}
export interface InsertMonthMutationVariables {
    month: number;
    goal: number;
    yearName: number;
    description?: string | null;
}
export interface InsertYearMutation_insertYear {
    __typename: "IErrorReponse";
    ok: boolean | null;
    message: string | null;
    path: string | null;
}
export interface InsertYearMutation {
    insertYear: InsertYearMutation_insertYear | null;
}
export interface InsertYearMutationVariables {
    edboardName: string;
    yeargoals?: YearGoalInput | null;
}
export interface ViewListingMNQuery_viewListingMN_mnInfo_mgid_ymmns_mgid {
    __typename: "MonthGoal";
    id: string;
}
export interface ViewListingMNQuery_viewListingMN_mnInfo_mgid_ymmns {
    __typename: "YearToMonthMN";
    id: string | null;
    description: string | null;
    mgid: ViewListingMNQuery_viewListingMN_mnInfo_mgid_ymmns_mgid | null;
}
export interface ViewListingMNQuery_viewListingMN_mnInfo_mgid {
    __typename: "MonthGoal";
    id: string;
    month: number;
    ymmns: ViewListingMNQuery_viewListingMN_mnInfo_mgid_ymmns[] | null;
}
export interface ViewListingMNQuery_viewListingMN_mnInfo_ygid_ymmns_mgid {
    __typename: "MonthGoal";
    id: string;
}
export interface ViewListingMNQuery_viewListingMN_mnInfo_ygid_ymmns {
    __typename: "YearToMonthMN";
    id: string | null;
    description: string | null;
    mgid: ViewListingMNQuery_viewListingMN_mnInfo_ygid_ymmns_mgid | null;
}
export interface ViewListingMNQuery_viewListingMN_mnInfo_ygid {
    __typename: "YearGoal";
    id: string;
    year: number;
    ymmns: (ViewListingMNQuery_viewListingMN_mnInfo_ygid_ymmns | null)[] | null;
}
export interface ViewListingMNQuery_viewListingMN_mnInfo {
    __typename: "YearToMonthMN";
    id: string | null;
    mgid: ViewListingMNQuery_viewListingMN_mnInfo_mgid | null;
    ygid: ViewListingMNQuery_viewListingMN_mnInfo_ygid | null;
}
export interface ViewListingMNQuery_viewListingMN_monthInfo {
    __typename: "MonthGoal";
    id: string;
}
export interface ViewListingMNQuery_viewListingMN_yearInfo {
    __typename: "YearGoal";
    id: string;
}
export interface ViewListingMNQuery_viewListingMN {
    __typename: "ListingMN";
    mnInfo: (ViewListingMNQuery_viewListingMN_mnInfo | null)[] | null;
    monthInfo: (ViewListingMNQuery_viewListingMN_monthInfo | null)[] | null;
    yearInfo: (ViewListingMNQuery_viewListingMN_yearInfo | null)[] | null;
}
export interface ViewListingMNQuery {
    viewListingMN: ViewListingMNQuery_viewListingMN | null;
}
export interface ViewListingMNQueryVariables {
    yearName: number;
}
export interface YearGoalInput {
    year?: number | null;
    goal?: number | null;
    description?: string | null;
}
