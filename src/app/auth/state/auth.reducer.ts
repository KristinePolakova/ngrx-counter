import { createReducer, on } from "@ngrx/store";
import { loginSuccess, signUpStart, signUpSuccess } from "./auth.actions";
import { initilaState } from "./auth.state";

export const authReducer = createReducer(
    initilaState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
        }
    }), on(signUpSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
        }
    })
);