import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

/**
 * Questo è un collapsable panel
 */
@Component({
  selector: 'ddg-panel',
  template: `
    <div class="card mb-2">
      <div class="card-header {{cls}}"
           [ngClass]="{
              'bg-warning': alert
           }"
           (click)="toggle.emit()"
      >
        <i class="fa" 
           *ngIf="showArrows"
           (click)="iconClick.emit()"
           [ngClass]="{
             'fa-arrow-circle-down': opened,
             'fa-arrow-circle-right': !opened
           }"></i>
        {{title}}
      </div>
      
      <div class="card-body"
           *ngIf="opened">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class PanelComponent implements OnChanges {
  @Input() title = 'Profile';
  @Input() alert = false;
  @Input() cls: string;
  @Input() showArrows = true;
  @Input() opened = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @Output() iconClick: EventEmitter<any>  = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}
