import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UserActions } from "../store/actions";
import { AppState } from "../store/model";
import { selectUser } from "../store/selectors";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;

	private store: Store<AppState> = inject(Store);
	user$ = this.store.select(selectUser);

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			login: ["", [Validators.required, Validators.email]],
			password: ["", Validators.required],
		});
	}

	register() {
		this.submitted = true;
		this.store.dispatch(
			UserActions.register({
				email: this.loginForm.controls.login.value,
				password: this.loginForm.controls.password.value,
			}),
		);
	}

	login() {
		this.submitted = true;
		this.store.dispatch(
			UserActions.login({
				email: this.loginForm.controls.login.value,
				password: this.loginForm.controls.password.value,
			}),
		);
	}
	logout() {
		this.store.dispatch(UserActions.logout());
	}
}
