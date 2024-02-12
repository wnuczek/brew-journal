import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BrewActions } from "../store/actions";
import { AppState, Brew } from "../store/model";
import { selectAllBrews } from "../store/selectors";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
	brews$: Observable<Brew[]> | undefined;

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.store.dispatch(BrewActions.loadBrews({}));
		this.brews$ = this.store.select(selectAllBrews);
	}
}
