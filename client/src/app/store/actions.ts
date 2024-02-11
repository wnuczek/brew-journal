import { createActionGroup, props } from "@ngrx/store";
import { Brew } from "./model";

export const BrewActions = createActionGroup({
	source: "Brews",
	events: {
		loadBrews: undefined,
		loadBrewsSuccess: props<{ brews: ReadonlyArray<Brew> }>(),
		"Add Brew": props<{ brew: Brew }>(),
		"Update Brew": props<{ brew: Brew }>(),
		"Remove Brew": props<{ brewId: number }>(),
	},
});

export const BrewApiActions = createActionGroup({
	source: "Brews API",
	events: {
		"Retrieved Brews List": props<{ brews: ReadonlyArray<Brew> }>(),
	},
});
