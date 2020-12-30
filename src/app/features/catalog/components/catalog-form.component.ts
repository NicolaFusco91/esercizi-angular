import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Device } from '../../../model/device';

@Component({
  selector: 'ddg-catalog-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form #f="ngForm" (submit)="save.emit(f)"
          *ngIf="!error"
          style="padding: 20px"
          [style.border]="f.invalid && f.dirty ? '3px dashed red' : null"
    >

      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fa"
               [ngClass]="{
                  'fa-check': inputLabel.valid,
                  'fa-times': inputLabel.invalid
               }"
               [style.color]="inputLabel.valid ? 'green' : 'red'"
            ></i>
          </div>
        </div>

        <input
          [ngModel]="active?.label"
          #inputLabel="ngModel"
          name="label"
          type="text"
          class="form-control"
          placeholder="Device name"
          required
          minlength="5"
          [style.background]="inputLabel.invalid && f.dirty ? 'red' : null"
        >
      </div>


      <input
        type="number"
        [ngModel]="active?.memory"
        name="memory"
        class="form-control"
        placeholder="Device Memory"
        required
      >

      <input
        type="number"
        [ngModel]="active?.price"
        name="price"
        class="form-control"
        placeholder="Device price"
        required
      >

      <div class="btn-group">
        <button type="button" class="btn btn-light" (click)="reset.emit(f)">RESET</button>
        <button type="submit" [disabled]="f.invalid" class="btn btn-primary">
          {{active ? 'EDIT' : 'ADD'}}
        </button>
      </div>
    </form>
  `,
})
export class CatalogFormComponent {
  @Output() save = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() active: Device;
}
