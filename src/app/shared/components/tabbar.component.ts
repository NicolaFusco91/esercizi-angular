import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ddg-tabbar',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item"
          *ngFor="let item of items"
          (click)="tabClickHandler(item)"
      >
        <a class="nav-link"
           [ngClass]="{
             'active': item.id === active?.id
           }"
        >
          <i *ngIf="icon" 
             [ngClass]="icon"
             (click)="iconClickHandler($event, item)"
          ></i>
          {{item[labelField]}}
        </a>
      </li>
    </ul>
  `
})
export class TabbarComponent {
  @Input() items: any[];
  @Input() labelField = 'label';
  @Input() icon;
  @Output() tabClick = new EventEmitter();
  @Output() iconClick = new EventEmitter();
  @Input() active;

  tabClickHandler(item) {
    this.tabClick.emit(item);
  }

  iconClickHandler(event: MouseEvent, item: any) {
    event.stopPropagation();
    this.iconClick.emit(item);
  }
}


