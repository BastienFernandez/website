import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    imports: [],
    templateUrl: './home-page.html',
    styleUrl: './home-page.scss',
})
export class HomePage {
    items = Array.from({ length: 40 }, (_, i) => i); // generates 40 paragraphs
}
