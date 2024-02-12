import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserActions } from "./store/actions";
import { AppState } from "./store/model";
import { selectUser } from "./store/selectors";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "Brew journal";

	private store: Store<AppState> = inject(Store);
	user$ = this.store.select(selectUser);

	constructor() {
		this.store.dispatch(UserActions.login({}));
	}
}
