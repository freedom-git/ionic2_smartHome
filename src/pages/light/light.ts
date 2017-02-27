import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { SocketService } from '../../service/socket.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-light',
  templateUrl: 'light.html'
})
export class LightPage {
  items = [
    { id: 1, text: '客厅主灯', status: 'off' },
    { id: 2, text: '卧室主灯', status: 'off' },
    { id: 0, text: '卧室床头灯', status: 'off' }
  ];

  constructor(public navCtrl: NavController, private socketService: SocketService, private dataService: DataService) {

  }
  itemClick(item) {
    if (item.status == 'on') { item.status = 'off' } else { item.status = 'on' }
    this.socketService.socket.emit('lightCtrl', { event: 'lightStatusChange', lightId: item.id, lightStatus: item.status, direction: 'down' });
    console.log("('lightCtrl', {event:'lightStatusChange',lightId:item.id,lightStatus:item.status,direction:'down'})");
  }

}
