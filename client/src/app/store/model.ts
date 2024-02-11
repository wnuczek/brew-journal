export interface AppState {
	brews: ReadonlyArray<Brew>;
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
