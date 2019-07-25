import { Component, OnInit } from '@angular/core';
import { Brew } from '../brew';
import { BrewService } from '../brew.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  brews: Brew[] = [];

  constructor(private brewService: BrewService) { }

  ngOnInit() {
  	this.getBrews();
  }

  getBrews(): void {
    this.brewService.getBrews()
      .subscribe(brews => this.brews = brews);
  }

}
