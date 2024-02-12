import { Location } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BrewService } from "../brew.service";
import { BrewActions } from "../store/actions";
import { AppState, Brew } from "../store/model";
import { selectAllBrews, selectUserLoggedIn } from "../store/selectors";

@Component({
	selector: "app-brews",
	templateUrl: "./brews.component.html",
	styleUrls: ["./brews.component.css"],
})
export class BrewsComponent implements OnInit {
	brews$: Observable<Brew[]> | undefined;

	@Input() brew: Brew;

	selectedBrew: Brew;

	private store: Store<AppState> = inject(Store);
	loggedIn$ = this.store.select(selectUserLoggedIn);

	id: number;

	image;

	collapsed = true;

	public mask = [
		/\d/,
		/\d/,
		/\d/,
		/\d/,
		"-",
		/\d/,
		/\d/,
		"-",
		/\d/,
		/\d/,
		" ",
		/\d/,
		/\d/,
		":",
		/\d/,
		/\d/,
		":",
		/\d/,
		/\d/,
	];

	constructor(
		private brewService: BrewService,
		private location: Location,
		private route: ActivatedRoute,
	) {}

	ngOnInit() {
		this.store.dispatch(BrewActions.loadBrews({}));
		this.brews$ = this.store.select(selectAllBrews);

		const id = +this.route.snapshot.paramMap.get("id");
		if (id) {
			this.getBrew();
		}
	}

	refreshBrewList() {
		this.store.dispatch(BrewActions.loadBrews({ forceRefresh: true }));
	}

	toggleCollapsed(): void {
		//console.log("collapse toggled");
		this.collapsed = !this.collapsed;
	}

	onSelect(brew: Brew): void {
		this.selectedBrew = brew;
	}

	getBrew(): void {
		const id = +this.route.snapshot.paramMap.get("id");
		this.brewService.getBrew(id).subscribe((selectedBrew) => {
			this.brew = selectedBrew;
			this.selectedBrew = selectedBrew;
		});
	}

	add(name: string): void {
		name = name.trim();
		//console.log(name);
		if (!name) {
			return;
		}
		this.brewService.addBrew({ name } as Brew).subscribe((brew) => {
			// this.getBrews();
			this.selectedBrew = this.brew;
		});
	}

	delete(brew: Brew): void {
		// this.brews = this.brews.filter((h) => h !== brew);
		this.brewService.deleteBrew(brew).subscribe();
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		this.brewService.updateBrew(this.selectedBrew).subscribe();
	}

	changeListener($event): void {
		this.readThis($event.target);
	}

	readThis(inputValue: any): void {
		const file: File = inputValue.files[0];
		const myReader: FileReader = new FileReader();

		myReader.onloadend = (e) => {
			this.image = myReader.result;
			this.selectedBrew.label = this.image;
			//console.log('label = '+ this.image);
		};
		myReader.readAsDataURL(file);
	}
}
