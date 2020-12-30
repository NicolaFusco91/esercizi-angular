import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meteo } from '../../model/meteo';

const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';
const TOKEN = 'eb03b1f5e5afb5f4a4edb40c1ef2f534'

@Component({
  selector: 'ddg-meteo',
  template: `
    <hr>
    {{city}}
    <br>
    <img [src]="iconURL" alt="">
    {{weatherInfo?.weather[0].description}}

  `
})
export class MeteoComponent implements OnChanges {
  @Input() city: string;
  @Input() unit = 'metric';
  iconURL: string;
  weatherInfo: Meteo;

  constructor(private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.city) {
      this.http.get<Meteo>(`${API_WEATHER}?q=${changes.city.currentValue}&units=${this.unit}&APPID=${TOKEN}`)
        .subscribe((res: Meteo) => {
          this.weatherInfo = res;
          this.iconURL = 'http://openweathermap.org/img/w/' + res.weather[0].icon + '.png'
        });
    }
  }
}
