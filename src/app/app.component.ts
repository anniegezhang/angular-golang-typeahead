import { Component } from '@angular/core';
import { StateQueryComponent } from './state-query/state-query.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-golang-typeahead-annie-072022';
  lat = 44.5;
  lng = -89.5;
}
