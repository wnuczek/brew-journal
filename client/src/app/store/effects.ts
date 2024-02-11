import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { BrewService } from "../brew.service";
import { BrewActions } from "./actions";

@Injectable()
export class BrewsEffects {
	loadBrews$ = createEffect(() =>
		this.actions$.pipe(
			ofType(BrewActions.loadBrews),
			exhaustMap(() =>
				this.brewsService.getBrews().pipe(
					map((brews) => BrewActions.loadBrewsSuccess({ brews: brews })),
					catchError(() => EMPTY),
				),
			),
		),
	);

	constructor(
		private actions$: Actions,
		private brewsService: BrewService,
	) {}
}
