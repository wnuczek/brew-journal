import { Injectable } from "@angular/core";
import { Auth, signInWithEmailAndPassword, user } from "@angular/fire/auth";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY, of } from "rxjs";
import {
	catchError,
	exhaustMap,
	map,
	switchMap,
	tap,
	withLatestFrom,
} from "rxjs/operators";
import { BrewService } from "../brew.service";
import { BrewActions, UserActions } from "./actions";
import { AppState } from "./model";
import { selectBrewsUpToDate } from "./selectors";

@Injectable()
export class BrewsEffects {
	loadBrews$ = createEffect(() =>
		this.actions$.pipe(
			ofType(BrewActions.loadBrews),
			withLatestFrom(this.store.select(selectBrewsUpToDate)),
			tap(([action, brewsUpToDate]) => {
				console.log(brewsUpToDate);
			}),
			exhaustMap(([action, brewsUpToDate]) => {
				if (brewsUpToDate) return EMPTY;
				return this.brewsService.getBrews().pipe(
					map((brews) => BrewActions.loadBrewsSuccess({ brews: brews })),
					catchError(() => EMPTY),
				);
			}),
		),
	);

	constructor(
		private actions$: Actions,
		private brewsService: BrewService,
		private store: Store<AppState>,
	) {}
}

@Injectable()
export class UserEffects {
	user$ = user(this.auth);
	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.login),
			switchMap((action) => {
				return this.user$.pipe(
					exhaustMap((user) => {
						// user already signed in
						if (user != null) {
							return of(UserActions.loginSuccess({ user: user }));
						}
						// user signing in with form
						if (action.email && action.password)
							return signInWithEmailAndPassword(
								this.auth,
								action.email,
								action.password,
							)
								.then((res) => {
									return UserActions.loginSuccess(res);
								})
								.catch((e) => {
									console.error({ ...e });
									switch (e.code) {
										case "auth/invalid-credential":
											return UserActions.loginFailure({
												errorMsg: "Invalid credentials",
											});
										case "auth/too-many-requests":
											return UserActions.loginFailure({
												errorMsg: "Too many requests. Try again later",
											});
										default:
											return UserActions.loginFailure({
												errorMsg: "Unknown error occured",
											});
									}
								});
						// none of above - return empty
						return EMPTY;
					}),
				);
			}),
		),
	);

	constructor(
		private actions$: Actions,
		private auth: Auth,
	) {}
}
