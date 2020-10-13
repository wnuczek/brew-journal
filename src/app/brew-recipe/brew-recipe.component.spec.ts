import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewRecipeComponent } from './brew-recipe.component';
import { HttpClientTestingModule }    from '@angular/common/http/testing';

describe('BrewRecipeComponent', () => {
  let component: BrewRecipeComponent;
  let fixture: ComponentFixture<BrewRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewRecipeComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
