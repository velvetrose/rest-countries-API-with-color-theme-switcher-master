import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rest-countries-api-with-color-theme-switcher-master';

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
 }
}
