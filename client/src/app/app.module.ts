import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, isDevMode } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrewDetailComponent } from "./brew-detail/brew-detail.component";
import { BrewRecipeComponent } from "./brew-recipe/brew-recipe.component";
import { BrewSearchComponent } from "./brew-search/brew-search.component";
import { BrewsComponent } from "./brews/brews.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { MessagesComponent } from "./messages/messages.component";
import { BrewsEffects, UserEffects } from "./store/effects";
import { brewsReducer, userReducer } from "./store/reducers";

@NgModule({
	declarations: [
		AppComponent,
		BrewsComponent,
		BrewDetailComponent,
		MessagesComponent,
		DashboardComponent,
		BrewSearchComponent,
		LoginComponent,
		BrewRecipeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		NgbModule,
		StoreModule.forRoot({ brews: brewsReducer, user: userReducer }, {}),
		EffectsModule.forRoot([BrewsEffects, UserEffects]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideAuth(() => getAuth()),
	],
	providers: [
		{ provide: LocationStrategy, useClass: PathLocationStrategy },
		AppComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
