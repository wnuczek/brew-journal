import { createReducer, on } from "@ngrx/store";

import { BrewActions, UserActions } from "./actions";
import { BrewsState, UserState } from "./model";

export const brewsInitialState: BrewsState = {
	list: [],
};

export const brewsReducer = createReducer(
	brewsInitialState,
	on(BrewActions.loadBrewsSuccess, (state, { brews }) => ({
		...state,
		list: brews,
		lastUpdated: new Date(),
	})),
	on(BrewActions.removeBrew, (state, { brewId }) => ({
		...state,
		list: state.list.filter((brew) => brew.id !== brewId),
	})),
	on(BrewActions.addBrew, (state, { brew }) => {
		if (
			state.list.findIndex((existingBrew) => brew.id === existingBrew.id) > -1
		)
			return state;
		return { ...state, list: [...state.list, brew] };
	}),
);

export const userInitialState: UserState = { loggedIn: false };

export const userReducer = createReducer(
	userInitialState,
	// on(UserActions.login, (state) => ({ ...state, loginInProgress: true })),
	on(UserActions.loginSuccess, (state, { user }) => ({
		...state,
		user: user,
		loggedIn: true,
		// loginInProgress: false,
	})),
	on(UserActions.loginFailure, (state, { errorMsg }) => ({
		...state,
		loggedIn: false,
		errorMsg: errorMsg,
		// loginInProgress: false,
	})),
);
