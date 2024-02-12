import { User } from "@angular/fire/auth";

export interface AppState {
	user: UserState;
	brews: BrewsState;
}

export interface UserState {
	loggedIn: boolean;
	user?: User;
	id?: string;
	email?: string;
	errorMsg?: string;
}

export interface BrewsState {
	list: Brew[];
	lastUpdated?: Date;
	selectedBrew?: Brew;
}

export interface Brew {
	id: number;
	number: number;
	name: string;
	style: string;
	alc: number;
	blg: number;
	creation: string;
	modification: string;
	brew_date: string;
	bottling_date: string;
	label: string;
	ingredients: Ingredient[];
}

export interface Ingredient {
	id: number;
	brew_id: number;
	name: string;
	unit: string;
	quantity: number;
}
