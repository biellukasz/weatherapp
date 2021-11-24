import { Component, OnInit } from '@angular/core';
import {ICurrentWeather} from "../model/icurrent-weather";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Bochnia',
      country: 'PL',
      date: new Date(),
      image: 'assets/img/sunny.png',
      temperature: 11,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit() {}
}
