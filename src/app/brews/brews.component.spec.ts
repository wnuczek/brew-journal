import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewsComponent } from './brews.component';

describe('BrewsComponent', () => {
  let component: BrewsComponent;
  let fixture: ComponentFixture<BrewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewsComponent ]
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
});
