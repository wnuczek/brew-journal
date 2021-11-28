import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { BrewsComponent } from './brews.component';
import { HttpClientTestingModule }    from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Brew } from '../brew';

describe('BrewsComponent', () => {
  let component: BrewsComponent;
  let fixture: ComponentFixture<BrewsComponent>;
  let brews: Brew[];

  let brewsServiceSpy;

  beforeEach(async(() => {
    //brews = of('brews');
 
    brewsServiceSpy = jasmine.createSpyObj('BrewService', ['getBrews']);
 
    brewsServiceSpy.getBrews.and.returnValue(brews);

    TestBed.configureTestingModule({
      declarations: [ BrewsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
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
