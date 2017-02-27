import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../../service/data.service';
import { SocketService } from '../../service/socket.service';

@Component({
  selector: 'page-airConditionRemoteCtrl',
  templateUrl: 'airConditionRemoteCtrl.html'
})
export class AirConditionRemoteCtrlPage {

  constructor(public navCtrl: NavController, private socketService: SocketService, private dataService: DataService) {

  }

  power_switch_click() {
    if (this.dataService.airCtrl.temperature.airConditioningStatus == 'on') {
      this.socketService.socket.emit('airCtrl', { event: 'stopWork', direction: 'down' });
    } else {
      this.socketService.socket.emit('airCtrl', { event: 'startWork', direction: 'down' });
    }

  };

  addTemperature() {
    if (this.dataService.deviceStatus.airConditioner.settingTem >= 31) { return }
    this.socketService.socket.emit('airCtrl', { event: 'addTemperature', direction: 'down' });
  };

  reduceTemperature() {
    if (this.dataService.deviceStatus.airConditioner.settingTem <= 16) { return }
    this.socketService.socket.emit('airCtrl', { event: 'reduceTemperature', direction: 'down' });
  };
  coldMode() {
    this.socketService.socket.emit('airCtrl', { event: 'coldMode', direction: 'down' });
  };

  windMode() {
    this.socketService.socket.emit('airCtrl', { event: 'windMode', direction: 'down' });
  };
  reduceHumidityMode() {
    this.socketService.socket.emit('airCtrl', { event: 'reduceHumidityMode', direction: 'down' });
  };
  heatMode() {
    this.socketService.socket.emit('airCtrl', { event: 'heatMode', direction: 'down' });
  };
  windDirection() {
    this.socketService.socket.emit('airCtrl', { event: 'windDirection', direction: 'down' });
  };
  windDirectionAuto() {
    this.socketService.socket.emit('airCtrl', { event: 'windDirectionAuto', direction: 'down' });
  };
  wind1() {
    this.socketService.socket.emit('airCtrl', { event: 'wind1', direction: 'down' });
  };
  wind2() {
    this.socketService.socket.emit('airCtrl', { event: 'wind2', direction: 'down' });
  };
  wind3() {
    this.socketService.socket.emit('airCtrl', { event: 'wind3', direction: 'down' });
  };

}
