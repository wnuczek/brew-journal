import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { Observable, of } from 'rxjs';
import { BrewsComponent } from './brews.component';
import { HttpClientTestingModule }    from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Brew } from '../brew';
=======
import { of } from 'rxjs'
import { BrewsComponent } from './brews.component';
import { HttpClientTestingModule }    from '@angular/common/http/testing';
>>>>>>> d98e428af77128db2d2c36e8218e301d03f0e6c4

describe('BrewsComponent', () => {
  let component: BrewsComponent;
  let fixture: ComponentFixture<BrewsComponent>;
<<<<<<< HEAD
  let brews: Brew[];

  let brewsServiceSpy;

  beforeEach(async(() => {
    //brews = of('brews');
=======
  let brews;
  let brewsServiceSpy;

  beforeEach(async(() => {
    brews = of('brews');
>>>>>>> d98e428af77128db2d2c36e8218e301d03f0e6c4
 
    brewsServiceSpy = jasmine.createSpyObj('BrewService', ['getBrews']);
 
    brewsServiceSpy.getBrews.and.returnValue(brews);

    TestBed.configureTestingModule({
      declarations: [ BrewsComponent ],
<<<<<<< HEAD
      imports: [ HttpClientTestingModule, RouterTestingModule ]
=======
      imports: [ HttpClientTestingModule ]
>>>>>>> d98e428af77128db2d2c36e8218e301d03f0e6c4
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getBrews', () => {
    it('should populate the local variable brews', () => {
      expect(component.brews).toEqual(brews);
    })
  })
});
