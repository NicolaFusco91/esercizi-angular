import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ddg-icon',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <i class="fa"
       [style.color]="getIconColor(os)"
       [ngClass]="{
             'fa-android': os === 'android',
             'fa-apple': os === 'ios',
             'fa-windows': os === 'windows'
           }"></i>
  `
})
export class IconComponent {
  @Input() os: string;

  getIconColor(os: string) {
    switch (os) {
      case 'android': return 'green';
      case 'ios': return 'grey';
      case 'windows': return 'brown';
    }
  }

}
