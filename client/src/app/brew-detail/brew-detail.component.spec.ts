import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BrewDetailComponent } from "./brew-detail.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("BrewDetailComponent", () => {
	let component: BrewDetailComponent;
	let fixture: ComponentFixture<BrewDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BrewDetailComponent],
			imports: [HttpClientTestingModule, RouterTestingModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrewDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
