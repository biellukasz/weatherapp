import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../service/weather/weather.service";
import {ICurrentWeather} from "../model/icurrent-weather";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: 0,
      image: '',
      temperature: 0,
      description: '',
    } as ICurrentWeather
  }

  ngOnInit() {
    this.getWeatherBasedOnLocation();
    this.weatherService
      .$currentWeather
      .subscribe(data => (this.current = data))
  }

  getWeatherBasedOnLocation() {
    if (navigator.geolocation) {
      // @ts-ignore
      navigator.geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            this.weatherService
              .getCurrentWeatherByCoords(position.coords.latitude, position.coords.longitude)
              .subscribe(data => this.weatherService.$currentWeather.next(data))
          }
        },
        // @ts-ignore
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
