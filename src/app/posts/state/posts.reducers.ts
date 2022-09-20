import { createReducer, on } from "@ngrx/store";
import { initialstate } from "./posts.state";

export const postsReducer = createReducer(
    initialstate
);