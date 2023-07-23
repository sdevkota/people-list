import { Component } from '@angular/core';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faPersonWalking = faPersonWalking;
  title = 'people-list';
  menuItems = ['Menu 1', 'Menu 2', 'Menu 2'];
}
