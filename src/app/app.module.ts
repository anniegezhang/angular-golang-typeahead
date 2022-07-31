import { NgModule, AfterViewInit, Component, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateQueryComponent } from './state-query/state-query.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AgmCoreModule } from '@agm/core';
import { MapStateComponent } from './map-state/map-state.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StateQueryComponent,
    MapStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6qbe4hUmf8zB4TZqAtZc02Npu0h75ysY'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
