import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewSearchComponent } from './brew-search.component';

describe('BrewSearchComponent', () => {
  let component: BrewSearchComponent;
  let fixture: ComponentFixture<BrewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
