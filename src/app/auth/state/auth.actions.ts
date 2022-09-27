import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[Auth Page] Login Start';
export const LOGIN_SUCCESS = '[Auth Page] Login Success';
export const LOGIN_FAILURE = '[Auth Page] Login Failure';

export const SIGN_UP_START = '[Auth Page] Sign Up Start';
export const SIGN_UP_SUCCESS = '[Auth Page] Sign Up Success';
export const AUTO_LOGIN_ACTION = '[Auth Page] Auto Login';
export const LOUGOUT_ACTION = '[Auth Page] Logout';

export const loginStart = createAction(
    LOGIN_START,
    props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{ user: User | null; redirect: boolean }>()
);

export const signUpStart = createAction(
    SIGN_UP_START,
    props<{ email: string; password: string }>()
);

export const signUpSuccess = createAction(
    SIGN_UP_SUCCESS,
    props<{ user: User; redirect: boolean }>()
);


export const autoLogin = createAction(AUTO_LOGIN_ACTION);

export const autoLogout = createAction(LOUGOUT_ACTION);

export const loginFailure = createAction(LOGIN_FAILURE);