import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { MessageService } from "./message.service";
import { Brew } from "./store/model";

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({ providedIn: "root" })
export class BrewService {
	private apiUrl = environment.apiUrl;

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

	getBrew(id: number): Observable<Brew> {
		const url = `${this.apiUrl}/brews/${id}`;
		return this.http.get<Brew>(url).pipe(
			tap((_) => this.log(`fetched brew id=${id}`)),
			catchError(this.handleError<Brew>(`getBrew id=${id}`)),
		);
	}

	searchBrews(term: string): Observable<Brew[]> {
		if (!term.trim()) {
			// if not search term, return empty hero array.
			return of([]);
		}
		return this.http.get<Brew[]>(`${this.apiUrl}/brews?search=${term}`).pipe(
			tap((_) => this.log(`found brews matching "${term}"`)),
			catchError(this.handleError<Brew[]>("searchBrews", [])),
		);
	}

	addBrew(brew: Brew): Observable<Brew> {
		//const url = `https://pawelwnuk.pl/brew/api/brew_details.php?action=write&method=insert&name=${brew.name}`;
		//console.log(brew);
		return this.http.post<Brew>(`${this.apiUrl}/brews`, brew, httpOptions).pipe(
			tap((newBrew: Brew) => this.log(`added brew w/ id=${newBrew.id}`)),
			catchError(this.handleError<Brew>("addBrew")),
		);
	}

	deleteBrew(brew: Brew | number): Observable<Brew> {
		const id = typeof brew === "number" ? brew : brew.id;
		const url = `${this.apiUrl}/brews/${id}`;

		return this.http.delete<Brew>(url).pipe(
			tap((_) => this.log(`deleted brew id=${id}`)),
			catchError(this.handleError<Brew>("deleteBrew")),
		);
	}

	updateBrew(brew: Brew | number): Observable<any> {
		const id = typeof brew === "number" ? brew : brew.id;
		const url = `${this.apiUrl}/brews/${id}`;
		return this.http.put(url, brew).pipe(
			tap((_) => this.log(`updated brew id=${id}`)),
			catchError(this.handleError<any>("updateBrew")),
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
