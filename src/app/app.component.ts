import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	prueba: string;
	url = 'https://api.icndb.com/jokes/random';
	objeto: any;
	constructor(private client: HttpClient) {}
	ngOnInit() {
		setInterval(() => {
			this.getData();
		}, 5000);
	}

	getData(): void {
		this.client.get(this.url).subscribe((data) => (this.prueba = data['value']['joke']));
	}
}
