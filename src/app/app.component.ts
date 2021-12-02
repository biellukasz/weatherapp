import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
    </mat-toolbar>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
    </div>
    <div fxLayoutAlign="center">
      <div class="mat-caption vertical-margin">Your city, your forecast, right now! Cloud People</div>
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
      <mat-card fxFlex="300px">
        <mat-card-header class="mat-typography">
          <mat-card-title>Weather App</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <app-current-weather></app-current-weather>
        </mat-card-content>
      </mat-card>
      <div fxFlex></div>
    </div>
  `
})
export class AppComponent {
  title = 'Weather App';
}
