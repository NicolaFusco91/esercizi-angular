import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { CatalogStore } from '../services/catalog.store';
import { Device } from '../../../model/device';

@Component({
  selector: 'ddg-catalog-list',
  template: `
    <li
      class="list-group-item"
      *ngFor="let device of devices"
      (click)="setActive.emit(device)"
      [ngClass]="{'active': active?.id === device.id}"
    >
    
      <ddg-icon [os]="device.os"></ddg-icon> 

      {{device.label}} 

      <span *ngIf="device.memory">memory: {{device.memory}}</span>

      <div class="pull-right" >
          <span
            [ngClass]="{'priceHigh': device.price > 400}">
            € {{device.price}}
          </span>
        <i class="fa fa-trash" (click)="deleteHandler($event, device)"></i>
      </div>
    </li>
  `,
})
export class CatalogListComponent {
  @Input() devices: Device[];
  @Input() active: Device;
  @Output() setActive = new EventEmitter()
  @Output() delete = new EventEmitter()

  deleteHandler(event: MouseEvent, device: Device) {
    event.stopPropagation();
    this.delete.emit(device);
  }
}

