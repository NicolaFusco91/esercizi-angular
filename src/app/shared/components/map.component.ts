import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

const SERVER = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const TOKEN = 'AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus';

@Component({
  selector: 'ddg-gmap',
  template: `
    <img width="100%" [src]="url" />
  `
})
export class GmapComponent implements OnChanges {
  @Input() value: string;
  @Input() size = '400x400';
  url: string;

  ngOnChanges(changes: SimpleChanges) {

    if (changes.value.firstChange) {
      // init map, chart, libreria
    }

    // update map
    this.url = `${SERVER}${this.value}&zoom=8&size=${this.size}&key=${TOKEN}`
  }
}
