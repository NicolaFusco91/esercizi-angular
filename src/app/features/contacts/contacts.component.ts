import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ddg-contacts',
  template: `
  
    
    <div>
      <div class="container mt-3">
        <ddg-panel title="Profile" [showArrows]="true">
          <input type="text">
        </ddg-panel>
        
        <ddg-panel [title]="'Mappe'">
            <img width="100%"
              src="https://maps.googleapis.com/maps/api/staticmap?center=45,7.68&zoom=8&size=400x400&key=AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus" />
        </ddg-panel>
      </div>
  
      <ddg-panel *ngFor="let device of devices"
                 [opened]="device.opened"
                 [alert]="device.price > 300"
                 [title]="device.label"
                 (toggle)="device.opened = !device.opened"
      >
        Gb: {{device.memory}} <br>
        Price: {{device.price}}
      </ddg-panel>
    </div>
    
    
    <pre>{{devices | json}}</pre>


    <ddg-tabbar
      [items]="users"
      [active]="activeUser"
      labelField="name"
      (tabClick)="openProfile($event)"
    ></ddg-tabbar>

    <ddg-tabbar
      [items]="activeUser?.children"
      labelField="name"
    ></ddg-tabbar>

    
    
    
    
    

    <ddg-tabbar
      [items]="devices"
      icon="fa fa-times"
      (iconClick)="deleteDevice($event)"
      [active]="activeDevice"
      (tabClick)="showSheet($event)"
    ></ddg-tabbar>

    

    <ddg-panel
      *ngIf="activeDevice"
      [title]="activeDevice.label">
      {{activeDevice.label}}
      {{activeDevice.memory}}
      {{activeDevice.price}}
    </ddg-panel>
  `,

})
export class ContactsComponent {
  devices;
  activeDevice;
  activeUser;

  users = [
    {
      id: 1,
      name: 'alberto',
      children: [
        { id: 1, name: 'lorenzo'},
        { id: 2, name: 'silvia'},
        { id: 3, name: 'pippo'}
      ]
    },
    {
      id: 2, name: 'Mario', children: [
        { id: 1, name: 'Marione'},
        { id: 2, name: 'Marino'},
        { id: 3, name: 'Marciccio'}
      ]
    },
    { id: 3, name: 'Foo' },
    { id: 4, name: 'Ciro' }
  ]

  constructor(http: HttpClient) {
    http.get('http://localhost:3000/devices')
      .subscribe(result => {
        this.devices = result;
        this.activeDevice = this.devices[0];
      });
  }

  openProfile(user) {
    this.activeUser = user;
    console.log('open profile', user)
    // window.open('http://linkedin.com/in/' + user.name)
  }

  showSheet(device) {
    this.activeDevice = device;
  }

  deleteDevice(device) {
    console.log('delete ', device)
    const index = this.devices.findIndex(d => d.id === device.id)
    this.devices.splice(index, 1)
  }
}
