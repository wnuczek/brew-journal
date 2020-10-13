import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'
import { BrewsComponent } from './brews.component';
import { HttpClientTestingModule }    from '@angular/common/http/testing';

describe('BrewsComponent', () => {
  let component: BrewsComponent;
  let fixture: ComponentFixture<BrewsComponent>;
  let brews;
  let brewsServiceSpy;

  beforeEach(async(() => {
    brews = of('brews');
 
    brewsServiceSpy = jasmine.createSpyObj('BrewService', ['getBrews']);
 
    brewsServiceSpy.getBrews.and.returnValue(brews);

    TestBed.configureTestingModule({
      declarations: [ BrewsComponent ],
      imports: [ HttpClientTestingModule ]
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
