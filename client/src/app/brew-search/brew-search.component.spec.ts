import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BrewSearchComponent } from "./brew-search.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("BrewSearchComponent", () => {
	let component: BrewSearchComponent;
	let fixture: ComponentFixture<BrewSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BrewSearchComponent],
			imports: [HttpClientTestingModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrewSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
