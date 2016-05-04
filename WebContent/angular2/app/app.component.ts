/**
 * New typescript file
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1 (click)="show()">Hello {{var1}}! Your First Angular 2.0 App</h1>'
})

export class AppComponent {
    var1: string = "SYMPOHX TWO";

    show() {
        alert("Hello");
    }
}