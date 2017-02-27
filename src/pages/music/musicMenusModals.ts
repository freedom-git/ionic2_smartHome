import { Component } from '@angular/core';


import {  ViewController } from 'ionic-angular';


import { DataService } from '../../service/data.service';
import { SocketService } from '../../service/socket.service';

@Component({
  selector: 'page-music-menus-modals',
  templateUrl: 'musicMenusModals.html'
})
export class MusicMenusModalsPage {
  searchText: string = '';

  constructor(private dataService: DataService, private socketService: SocketService, private viewCtrl: ViewController) {

  }
  changeMusic(music) {
    this.socketService.socket.emit('musicCtrl', { event: 'changeMusic', musicIndex: this.dataService.music.musicFileList.indexOf(music), direction: 'down' });
  };

  dismiss() {
    this.viewCtrl.dismiss();
    delete this.dataService.runTimeCache.openedModal;
  }

}
