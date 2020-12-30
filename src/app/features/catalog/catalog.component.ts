import { Component } from '@angular/core';
import { CatalogService } from './services/catalog.service';
import { CatalogStore } from './services/catalog.store';

@Component({
  selector: 'ddg-catalog',
  template: `
    <input type="text" [ngModel]>
    
    <ddg-catalog-form
      [active]="store.active"
      (save)="actions.save($event)"
      (reset)="actions.reset($event)"
    ></ddg-catalog-form>
    
    <div class="container mt-3">
      <ddg-catalog-list
        [devices]="store.devices"
        [active]="store.active"
        (setActive)="actions.setActive($event)"
        (delete)="actions.delete($event)"
      ></ddg-catalog-list>
    </div>
  `
})
export class CatalogComponent {

  constructor(
    public actions: CatalogService,
    public store: CatalogStore
  ) {
    actions.getAll();
  }

}

