import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { SocketService } from '../../service/socket.service';
import { NavController } from 'ionic-angular';

import { AirConditionRemoteCtrlPage } from '../../pages/airConditionRemoteCtrl/airConditionRemoteCtrl';

@Component({
  selector: 'page-air',
  templateUrl: 'air.html'
})
export class AirPage {

  constructor(public navCtrl: NavController, private socketService: SocketService, private dataService: DataService) {

  }

  onClick(item) {
    switch (item) {
      case "temperature":
        this.navCtrl.push(AirConditionRemoteCtrlPage);
        break;
      case "humidity":

        break;
    }
  };

  onPress = function (item) {
    switch (item) {
      case "temperature":
        if (this.dataService.airCtrl.temperature.autoCtrlStatus) {
          this.socketService.socket.emit('airCtrl', { event: 'stopTemAutoCtrl', direction: 'down' });
        } else {
          this.socketService.socket.emit('airCtrl', { event: 'startTemAutoCtrl', direction: 'down' });
        }
        break;
      case "humidity":

        break;
    }
  };

}
