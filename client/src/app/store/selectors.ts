import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BrewsState, UserState } from "./model";

const UPDATE_THRESHOLD = 5 * 60 * 1000; // 5 minutes

export const selectBrews = createFeatureSelector<BrewsState>("brews");

export const selectAllBrews = createSelector(
	selectBrews,
	(brews) => brews.list,
);

export const selectBrewById = (id: number) =>
	createSelector(selectBrews, (brews) =>
		brews.list.filter((brew) => brew.id === id),
	);

export const selectBrewsUpToDate = createSelector(
	selectBrews,
	(brews) =>
		!!(
			brews.list.length &&
			brews.lastUpdated.valueOf() - new Date().valueOf() < UPDATE_THRESHOLD
		),
);

export const selectUser = createFeatureSelector<UserState>("user");

export const selectUserCredentials = createSelector(
	selectUser,
	(user) => user.user,
);

export const selectUserLoggedIn = createSelector(
	selectUser,
	(user) => user.loggedIn,
);

export const selectLoginErrorMessage = createSelector(
	selectUser,
	(user) => user.errorMsg,
);
