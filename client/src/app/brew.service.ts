import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Brew } from "./brew";
import { Ingredient } from "./ingredient";

import { environment } from "src/environments/environment";
import { MessageService } from "./message.service";

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({ providedIn: "root" })
export class BrewService {
	private apiUrl = environment.apiUrl;

	private brewsUrl = "https://pawelwnuk.pl/brew/api/brew.php"; // URL to web api
	private ingredientsUrl = "https://pawelwnuk.pl/brew/api/recipe.php"; // URL to web api

	constructor(
		private http: HttpClient,
		private messageService: MessageService,
	) {}

	getBrews(): Observable<Brew[]> {
		return this.http.get<Brew[]>(`${this.apiUrl}/brews`).pipe(
			tap((_) => this.log("fetched brews")),
			catchError(this.handleError("getBrews", [])),
		);
	}

	getIngredients(id: number): Observable<Ingredient[]> {
		return this.http.get<Ingredient[]>(`${this.ingredientsUrl}?id=${id}`).pipe(
			tap((_) => this.log("fetched ingredients")),
			catchError(this.handleError("getIngredients", [])),
		);
	}

	/** GET hero by id. Return `undefined` when id not found */
	getHeroNo404<Data>(id: number): Observable<Brew> {
		const url = `${this.brewsUrl}?id=${id}`;
		return this.http.get<Brew[]>(url).pipe(
			map((heroes) => heroes[0]), // returns a {0|1} element array
			tap((h) => {
				const outcome = h ? "fetched" : "did not find";
				this.log(`${outcome} brew id=${id}`);
			}),
			catchError(this.handleError<Brew>(`getBrew id=${id}`)),
		);
	}

	/** GET hero by id. Will 404 if id not found */
	getBrew(id: number): Observable<Brew> {
		const url = `${this.apiUrl}/brews/${id}`;
		return this.http.get<Brew>(url).pipe(
			tap((_) => this.log(`fetched brew id=${id}`)),
			catchError(this.handleError<Brew>(`getBrew id=${id}`)),
		);
	}

	/* GET heroes whose name contains search term */
	searchBrews(term: string): Observable<Brew[]> {
		if (!term.trim()) {
			// if not search term, return empty hero array.
			return of([]);
		}
		return this.http
			.get<Brew[]>(`${this.brewsUrl}/?func=SEARCH&name=${term}`)
			.pipe(
				tap((_) => this.log(`found brews matching "${term}"`)),
				catchError(this.handleError<Brew[]>("searchBrews", [])),
			);
	}

	//////// Save methods //////////

	/** POST: add a new hero to the server */
	addBrew(brew: Brew): Observable<Brew> {
		//const url = `https://pawelwnuk.pl/brew/api/brew_details.php?action=write&method=insert&name=${brew.name}`;
		//console.log(brew);
		return this.http.post<Brew>(this.brewsUrl, brew, httpOptions).pipe(
			tap((newBrew: Brew) => this.log(`added brew w/ id=${newBrew.id}`)),
			catchError(this.handleError<Brew>("addBrew")),
		);
	}

	/** DELETE: delete the hero from the server */
	deleteBrew(brew: Brew | number): Observable<Brew> {
		const id = typeof brew === "number" ? brew : brew.id;
		const url = `${this.brewsUrl}?id=${id}`;

		return this.http.delete<Brew>(url).pipe(
			tap((_) => this.log(`deleted brew id=${id}`)),
			catchError(this.handleError<Brew>("deleteBrew")),
		);
	}

	/** PUT: update the hero on the server */
	updateBrew(brew: Brew | number): Observable<any> {
		const id = typeof brew === "number" ? brew : brew.id;
		const url = `${this.brewsUrl}?id=${id}`;
		return this.http.put(url, brew).pipe(
			tap((_) => this.log(`updated brew id=${id}`)),
			catchError(this.handleError<any>("updateBrew")),
		);
	}

	/** POST: add a new hero to the server */
	addIngredient(
		ingredient: Ingredient,
		brew_id: number,
	): Observable<Ingredient> {
		//const url = `https://pawelwnuk.pl/brew/api/brew_details.php?action=write&method=insert&name=${brew.name}`;
		//console.log(ingredient);
		return this.http
			.post<Ingredient>(
				`${this.ingredientsUrl}?id=${brew_id}`,
				ingredient,
				httpOptions,
			)
			.pipe(
				tap((newIngredient: Ingredient) =>
					this.log(`added ingredient w/ id=${newIngredient.id}`),
				),
				catchError(this.handleError<Ingredient>("addIngredient")),
			);
	}

	/** DELETE: delete the hero from the server */
	deleteIngredient(ingredient: Ingredient | number): Observable<Ingredient> {
		const id = typeof ingredient === "number" ? ingredient : ingredient.id;
		const url = `${this.ingredientsUrl}?id=${id}`;

		return this.http.delete<Ingredient>(url).pipe(
			tap((_) => this.log(`deleted ingredient id=${id}`)),
			catchError(this.handleError<Ingredient>("deleteIngredient")),
		);
	}

	/** PUT: update the hero on the server */
	updateIngredient(ingredient: Ingredient | number): Observable<any> {
		const id = typeof ingredient === "number" ? ingredient : ingredient.id;
		const url = `${this.ingredientsUrl}?id=${id}`;
		return this.http.put(url, ingredient).pipe(
			tap((_) => this.log(`updated ingredient id=${id}`)),
			catchError(this.handleError<any>("updateIngredient")),
		);
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = "operation", result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	/** Log a HeroService message with the MessageService */
	private log(message: string) {
		this.messageService.add(`BrewService: ${message}`);
	}
}
