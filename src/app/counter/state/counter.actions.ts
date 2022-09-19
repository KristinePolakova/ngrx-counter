import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter Page] increment');
export const decrement = createAction('[Counter Page] decrement');
export const reset = createAction('[Counter Page] reset');