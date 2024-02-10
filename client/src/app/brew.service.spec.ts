import { TestBed } from "@angular/core/testing";

import { BrewService } from "./brew.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("BrewService", () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		}),
	);

	it("should be created", () => {
		const service: BrewService = TestBed.get(BrewService);
		expect(service).toBeTruthy();
	});
});
