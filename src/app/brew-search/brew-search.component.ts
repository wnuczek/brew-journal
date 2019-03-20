import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Brew } from '../brew';
import { BrewService } from '../brew.service';


@Component({
  selector: 'app-brew-search',
  templateUrl: './brew-search.component.html',
  styleUrls: ['./brew-search.component.css']
})
export class BrewSearchComponent implements OnInit {

  brews$: Observable<Brew[]>;
  private searchTerms = new Subject<string>();

  constructor(private brewService: BrewService) { }


  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {

  	  this.brews$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.brewService.searchBrews(term)),
    );

  }

}
