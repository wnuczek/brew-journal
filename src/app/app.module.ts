import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrewsComponent } from './brews/brews.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrewSearchComponent } from './brew-search/brew-search.component';
import { LoginComponent } from './login/login.component';
import { BrewRecipeComponent } from './brew-recipe/brew-recipe.component';

import { TextMaskModule } from 'angular2-text-mask';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatDatepickerModule } from '@angular/material';

//import {MatButtonModule, MatCheckboxModule} from '@angular/material';



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
    TextMaskModule,
    NgbModule
    //BrowserAnimationsModule,
    //MatButtonModule, 
    //MatCheckboxModule
    //MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
