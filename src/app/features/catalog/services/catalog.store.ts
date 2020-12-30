import { Device } from '../../../model/device';

export class CatalogStore {
  error: any;
  active: Device;
  devices: Device[];

  delete(id) {
    const index = this.devices.findIndex(d => d.id === id);
    this.devices.splice(index, 1);
  }

  add(device: Device) {
    this.devices.push(device);
  }
}
