import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketService } from '../../service/socket.service';
import { HttpService } from '../../service/http.service';
import { DataService } from '../../service/data.service';
import { MusicPage } from '../../pages/music/music';
import { AirPage } from '../../pages/air/air';
import { LightPage } from '../../pages/light/light';

@Component({
    selector: 'page-index',
    templateUrl: 'index.html'
})
export class IndexPage {
    IndexCtrl: Object;
    toggle: boolean;
    items: Array<Object>;
    innerWidth: number;

    constructor(private socketService: SocketService, private httpService: HttpService, private dataService: DataService, public navCtrl: NavController) {

        this.innerWidth = window.innerWidth;
        this.IndexCtrl = {};
        this.IndexCtrl['musicFileDir'] = [];
        this.toggle = false;
        this.items = [
            { img: 'music.jpg', text: 'Music', action: 'music' },
            { img: 'air.jpg', text: 'Air', action: 'air' },
            { img: 'light.jpg', text: 'Light', action: 'light' }
        ];



    }


    changeMusic(music: string): void {
        if (music == 'equality.mp3') {
            this.socketService.socket.emit('chatMessage', 'back');
        } else {
            this.socketService.socket.emit('chatMessage', 'change');
        }
    };



    navHold(message: string): void {
        switch (message) {
            case 'music':
                alert('music');
                console.log('music');
                // $state.go('detailSetting');
                break;
        }
    };


    itemClick(action: string): void {
        switch (action) {
            case 'music':
                this.navCtrl.push(MusicPage);
                break;
            case 'air':
                this.navCtrl.push(AirPage);
                break;
            case 'light':
            this.navCtrl.push(LightPage);
                break;
        }
    };

    ionViewWillLeave() {
        history.pushState(null, null, document.URL);
        console.log("leave home ,add pushState");
    }


}
