import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Brew } from "./model";

export const selectBrews = createFeatureSelector<Brew[]>("brews");

export const selectAllBrews = selectBrews;

export const selectBrewById = (id: number) =>
	createSelector(selectBrews, (brews) =>
		brews.filter((brew) => brew.id === id),
	);
