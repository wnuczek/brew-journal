import { Component, OnInit, Input } from '@angular/core';

//import {MatDatepickerModule} from '@angular/material/datepicker';

import { Brew } from '../brew';
import { BrewService } from '../brew.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TextMaskModule } from 'angular2-text-mask';


@Component({
  selector: 'app-brews',
  templateUrl: './brews.component.html',
  styleUrls: ['./brews.component.css']
})
export class BrewsComponent implements OnInit {

	brews: Brew[];

  @Input() brew: Brew;

  selectedBrew: Brew;

  loggedIn: string = 'false';

  image;

  public mask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/,];


  constructor(private brewService: BrewService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedIn=localStorage.getItem('loggedIn');
    console.log('logged in = ' + this.loggedIn);
    this.getBrews();
    const id = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.getBrew();
    }
  }

  onSelect(brew: Brew): void {
    this.selectedBrew = brew;
  }

  getBrews(): void {
  	this.brewService.getBrews().subscribe(brews => {this.brews=brews;});
  }

  getBrew(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.brewService.getBrew(id)
      .subscribe(selectedBrew => {this.brew = selectedBrew; console.log(selectedBrew); this.selectedBrew=selectedBrew});
  }

  add(name: string): void {
    name = name.trim();
    //console.log(name);
    if (!name) { return; }
    this.brewService.addBrew({name} as Brew)
      .subscribe(
        brew => {this.getBrews(); this.selectedBrew=this.brew}
      );
  }
 
  delete(brew: Brew): void {
    this.brews = this.brews.filter(h => h !== brew);
    this.brewService.deleteBrew(brew).subscribe();
  }

  goBack(): void {
    this.location.back();
  }
 
  save(): void {
    this.brewService.updateBrew(this.selectedBrew)
      .subscribe();
  }


  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
          this.selectedBrew.label=this.image;
    console.log('label = '+ this.image);
    }
    myReader.readAsDataURL(file);
  }

}
