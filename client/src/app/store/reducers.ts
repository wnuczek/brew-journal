import { createReducer, on } from "@ngrx/store";

import { BrewActions } from "./actions";
import { Brew } from "./model";

export const initialState: ReadonlyArray<Brew> = [];

export const brewsReducer = createReducer(
	initialState,
	on(BrewActions.loadBrewsSuccess, (_state, { brews }) => brews),
	on(BrewActions.removeBrew, (state, { brewId }) =>
		state.filter((brew) => brew.id !== brewId),
	),
	on(BrewActions.addBrew, (state, { brew }) => {
		if (state.findIndex((existingBrew) => brew.id === existingBrew.id) > -1)
			return state;
		return [...state, brew];
	}),
);
