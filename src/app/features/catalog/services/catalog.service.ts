import { Injectable } from '@angular/core';
import { Device } from '../../../model/device';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CatalogStore } from './catalog.store';

const SERVER = 'http://localhost:3000';

@Injectable()
export class CatalogService {

  constructor(
    private http: HttpClient,
    private store: CatalogStore
  ) {}

  getAll() {
    this.http.get<Device[]>(`${SERVER}/devices`)
      .subscribe(
        (result: Device[]) => this.store.devices = result,
        (err) => this.store.error = err
      );
  }

  setActive(device: Device) {
    this.store.active = device;
  }

  save(form: NgForm) {
    if (this.store.active) {
      this.edit(form);
    } else {
      this.add(form);
    }
  }

  edit(form: NgForm) {
    this.http.patch<Device>(`${SERVER}/devices/${this.store.active.id}`, form.value)
      .subscribe(res => {
        const index = this.store.devices.findIndex((d) => d.id === this.store.active.id);

        const devices = [...this.store.devices];
        devices[index] = res;
        this.store.devices = devices;
      });
  }

  add(form: NgForm) {
    this.http.post<Device>(`${SERVER}/devices`, form.value)
      .subscribe(res => {
        this.store.add(res);
      });
  }

  delete(device: Device) {
    this.http.delete(`${SERVER}/devices/${device.id}`)
      .subscribe(() => {
        this.store.delete(device.id)
      });
  }



  reset(form: NgForm) {
    this.store.active = null;
    form.reset();
  }



}
