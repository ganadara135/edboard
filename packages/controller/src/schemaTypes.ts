/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateEDBoardMutation
// ====================================================

export interface CreateEDBoardMutation_createEDBoard {
  __typename: "ErrorReponse";
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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: InsertMonthMutation
// ====================================================

export interface InsertMonthMutation_insertMonth {
  __typename: "ErrorReponse";
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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: InsertYearMutation
// ====================================================

export interface InsertYearMutation_insertYear {
  __typename: "ErrorReponse";
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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface YearGoalInput {
  year?: number | null;
  goal?: number | null;
  description?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
