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
export interface InsertGoalMutation_insertGoal {
    __typename: "Error";
    path: string;
    message: string;
}
export interface InsertGoalMutation {
    insertGoal: InsertGoalMutation_insertGoal[] | null;
}
export interface InsertGoalMutationVariables {
    name?: string | null;
    description?: string | null;
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
    goal: string;
    description?: string | null;
}
