import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Brew }         from '../brew';
import { BrewService }  from '../brew.service';

@Component({
  selector: 'app-brew-detail',
  templateUrl: './brew-detail.component.html',
  styleUrls: ['./brew-detail.component.css']
})
export class BrewDetailComponent implements OnInit {

  @Input() brew: Brew;

  constructor(
  	private route: ActivatedRoute,
    private brewService: BrewService,
    private location: Location
    ) { }

  ngOnInit() {
  	this.getBrew();
  }

  getBrew(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.brewService.getBrew(id)
      .subscribe(brew => {this.brew = brew; console.log(brew);});
  }
 
  goBack(): void {
    this.location.back();
  }
 
 save(): void {
    this.brewService.updateBrew(this.brew)
      .subscribe(() => this.goBack());
  }

}
