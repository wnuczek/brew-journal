import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BrewService } from "../brew.service";
import { Brew } from "../store/model";

@Component({
	selector: "app-brew-detail",
	templateUrl: "./brew-detail.component.html",
	styleUrls: ["./brew-detail.component.css"],
})
export class BrewDetailComponent implements OnInit {
	@Input() brew: Brew;

	constructor(
		private route: ActivatedRoute,
		private brewService: BrewService,
		private location: Location,
	) {}

	ngOnInit() {
		this.getBrew();
	}

	getBrew(): void {
		const id = +this.route.snapshot.paramMap.get("id");
		this.brewService.getBrew(id).subscribe((brew) => {
			this.brew = brew;
		});
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		this.brewService.updateBrew(this.brew).subscribe(() => this.goBack());
	}
}
