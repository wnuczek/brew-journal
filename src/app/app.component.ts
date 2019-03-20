import { Component } from '@angular/core';

import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dziennik piwowara';
  //loggedIn: string = 'false';


  constructor(private location: Location) { }

  loggedIn=localStorage.getItem('loggedIn');

logout(): void {
	localStorage.removeItem('loggedIn');
	window.location.reload();

}

ngOnInit(){
  this.loggedIn=localStorage.getItem('loggedIn');
}

ngOnChanges(){
  this.loggedIn=localStorage.getItem('loggedIn');
}


}
