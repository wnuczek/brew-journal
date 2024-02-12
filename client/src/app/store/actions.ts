import { User } from "@angular/fire/auth";
import { createActionGroup, props } from "@ngrx/store";
import { Brew } from "./model";

export const BrewActions = createActionGroup({
	source: "Brews",
	events: {
		loadBrews: props<{ forceRefresh?: boolean }>(),
		loadBrewsSuccess: props<{ brews: Brew[] }>(),
		"Add Brew": props<{ brew: Brew }>(),
		"Update Brew": props<{ brew: Brew }>(),
		"Remove Brew": props<{ brewId: number }>(),
	},
});

export const UserActions = createActionGroup({
	source: "Users",
	events: {
		login: props<{ email?: string; password?: string }>(),
		loginSuccess: props<{ user: User }>(),
		loginFailure: props<{ errorMsg: string }>(),
		logout: undefined,
		logoutSuccess: undefined,
		register: props<{ email: string; password: string }>(),
		registerSuccess: props<{ user: User }>(),
	},
});
