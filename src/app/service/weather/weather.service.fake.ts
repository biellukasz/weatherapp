import { Observable, of } from 'rxjs'

import { IWeatherService } from './weather.service'
import {ICurrentWeather} from "../../model/models";

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Krakow',
    country: 'PL',
    date: 1485789600,
    image: '',
    temperature: 330.32,
    description: 'light intensity drizzle',
  }
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}

