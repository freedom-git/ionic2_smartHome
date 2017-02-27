import { Component } from '@angular/core';


import { ModalController } from 'ionic-angular';

import { MusicMenusModalsPage } from './musicMenusModals';

import { DataService } from '../../service/data.service';
import { SocketService } from '../../service/socket.service';

@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {

  constructor( private dataService: DataService, private socketService: SocketService, public modalCtrl: ModalController) {

  }

  controlButtonClicked() {
    if (this.dataService.music.musicStatus.status == 'playing') {
      this.socketService.socket.emit('musicCtrl', { event: 'MusicPause', direction: 'down' });
      console.log("send:('musicCtrl', {event:'MusicPause',direction:'down'})");
    } else {
      this.socketService.socket.emit('musicCtrl', { event: 'MusicContinue', musicIndex: this.dataService.music.musicStatus.musicIndex, direction: 'down' });
      console.log("('musicCtrl', {event:'MusicContinue',musicIndex:resourceService.musicStatus.musicIndex,direction:'down'})");
    }
  };
  lastAndNext(direction) {
    if (direction == 'last') {
      this.socketService.socket.emit('musicCtrl', { event: 'lastMusic', direction: 'down' });
    }
    if (direction == 'next') {
      this.socketService.socket.emit('musicCtrl', { event: 'nextMusic', direction: 'down' });
    }

  };
  stop () {
            this.socketService.socket.emit('musicCtrl', {event:'stop',direction:'down'});
        };

  presentModal() {
    let modal = this.modalCtrl.create(MusicMenusModalsPage);
    modal.present();
    this.dataService.runTimeCache.openedModal=modal;
  }

}
