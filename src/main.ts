<<<<<<< HEAD
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
=======
class Startup {
	public static main(): number {
		console.log('Hello World');
		return 0;
	}
}

//Startup.main();

class Student {
	fullName: string;

	constructor(public firstName: string, public lastName: string, public country: string) {
		this.fullName = firstName + " " + lastName + " from " + country;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}


function greeter (person: Person) {
	return document.createTextNode("This is " + person.firstName + " " + person.lastName);
}

function post (): void {
	let user = new Student("Tim", "Pitter", "USA");
	let x = document.createElement("P");
	let t = greeter(user);
	x.appendChild(t);
	document.body.appendChild(x);
}
>>>>>>> complete project change
