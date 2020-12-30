import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-uikit',
  template: `
    <br>
    Inserire il nome della città
    <br>
    <input type="text" [formControl]="cityTxt">
    
    <ddg-meteo [city]="city" unit="C"></ddg-meteo>
  `,
})
export class UikitComponent {

  city = 'Naples';
  cityTxt = new FormControl()

  constructor() {
    this.cityTxt.valueChanges
      .pipe(
        filter(text => text.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(text => {
        this.city = text;
      })
  }

  onChange(input: HTMLInputElement) {
    this.city = input.value;
  }

}
