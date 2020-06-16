export interface MeQuery_me {
    __typename: "User";
    email: string;
}
export interface MeQuery {
    me: MeQuery_me | null;
}
export interface ForgotPasswordChangeMutation_forgotPasswordChange {
    __typename: "Error";
    path: string;
    message: string;
}
export interface ForgotPasswordChangeMutation {
    forgotPasswordChange: ForgotPasswordChangeMutation_forgotPasswordChange[] | null;
}
export interface ForgotPasswordChangeMutationVariables {
    newPassword: string;
    key: string;
}
export interface CreateEDBoardMutation_createEDBoard {
    __typename: "ErrorReponse";
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
export interface CreateListingMutation {
    createListing: boolean;
}
export interface CreateListingMutationVariables {
    name: string;
    category: string;
    description: string;
    price: number;
    beds: number;
    guests: number;
    latitude: number;
    longitude: number;
    amenities: string[];
}
export interface SendForgotPasswordEmailMutation {
    sendForgotPasswordEmail: boolean | null;
}
export interface SendForgotPasswordEmailMutationVariables {
    email: string;
}
export interface InsertYearMutation_insertYear {
    __typename: "ErrorReponse";
    path: string | null;
    message: string | null;
}
export interface InsertYearMutation {
    insertYear: InsertYearMutation_insertYear | null;
}
export interface InsertYearMutationVariables {
    edboardName: string;
    yeargoals?: YearGoalInput | null;
}
export interface LoginMutation_login_errors {
    __typename: "Error";
    path: string;
    message: string;
}
export interface LoginMutation_login {
    __typename: "LoginResponse";
    errors: LoginMutation_login_errors[] | null;
    sessionId: string | null;
}
export interface LoginMutation {
    login: LoginMutation_login;
}
export interface LoginMutationVariables {
    email: string;
    password: string;
}
export interface RegisterMutation_register {
    __typename: "Error";
    path: string;
    message: string;
}
export interface RegisterMutation {
    register: RegisterMutation_register[] | null;
}
export interface RegisterMutationVariables {
    email: string;
    password: string;
}
export interface YearGoalInput {
    year?: number | null;
    goal?: number | null;
    description?: string | null;
}
