import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { loginStart, loginSuccess, signUpStart, signUpSuccess } from "./auth.actions";

@Injectable()

export class AuthEffects {
    constructor(private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router,
    ) { }

    login$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        //for error message to disapear when there is no error
                        this.store.dispatch(setErrorMessage({ message: '' }));
                        const user = this.authService.formatUser(data);
                        return loginSuccess({ user });
                    }),
                    catchError((errResponse) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        const errorMessage = this.authService.getErrorMessage(
                            errResponse.error.error.message
                        );
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                );
            })
        );
    });

    loginRedirect$ = createEffect(
        (): any => {
            return this.actions$.pipe(
                ofType(...[loginSuccess, signUpSuccess]),
                tap((action) => {
                    this.store.dispatch(setErrorMessage({ message: '' }));
                    this.router.navigate(['/']);
                })
            );
        }, { dispatch: false }
    );

    signUp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signUpStart),
            exhaustMap((action) => {
                return this.authService.signUp(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const user = this.authService.formatUser(data);
                        return signUpSuccess({ user });
                    }), catchError((errResponse) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        const errorMessage = this.authService.getErrorMessage(
                            errResponse.error.error.message
                        );
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                )
            })
        )
    })
}