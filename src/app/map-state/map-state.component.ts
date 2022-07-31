import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-state',
  templateUrl: './map-state.component.html',
  styleUrls: ['./map-state.component.css']
})
export class MapStateComponent implements OnInit {
  lat = 44.5;
  lng = -89.5;
  constructor() { }

  ngOnInit(): void {
  }

}
