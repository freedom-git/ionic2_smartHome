import { Injectable } from '@angular/core';

import * as io from "../assets/lib/socket.io";

import { Config } from '../config/config';
import { DataService } from '../service/data.service';

@Injectable()
export class SocketService {
    config: Config;
    socket: any;
    airCtrl: Object;
    deviceStatus: Object;


    constructor(private dataService: DataService) {
        this.config = new Config();
        console.log(this.config);
        this.socket = io.connect(this.config.serverAddress);

        this.deviceStatus = {
            airConditioner: {
                mode: 'coldMode',
                windGrade: 3,
                windAutoDirection: false,
                settingTem: 25
            }
        };
        this.socket.on('airCtrl', function (data) {
            if (data.direction !== 'up' && data.direction !== 'both') { return; }
            switch (data.event) {
                case 'humidityUpdate':
                    dataService.airCtrl.humidity.value = data.humidity;
                    break;
                case 'temperatureUpdate':
                    dataService.airCtrl.temperature.value = data.temperature;
                    break;
                case 'temperatureAutoCtrlStatusUpdate':
                    dataService.airCtrl.temperature.autoCtrlStatus = data.temperatureAutoCtrlStatus;
                    break;
                case 'airConditioningStatus':
                    dataService.airCtrl.temperature.airConditioningStatus = data.airConditioningStatus;
                    break;
                default:
                    break;

            }
            console.log(JSON.stringify(data));
        });

        this.socket.on('musicCtrl', function (data) {
            if (data.direction !== 'up' && data.direction !== 'both') { return; }
            switch (data.event) {
                case 'musicStart':
                    data.musicIndex ? dataService.music.musicStatus.musicIndex = data.musicIndex : 0;
                    dataService.music.musicStatus.status = 'playing';
                    break;
                case 'musicFileDir':
                    dataService.music.musicFileList = data.musicFileDir;
                    break;
                case 'musicPaused':
                    dataService.music.musicStatus.status = 'paused';
                    break;
                case 'musicStop':
                    dataService.music.musicStatus.status = 'stop';
                    break;
                default:
                    break;
            }
            console.log(JSON.stringify(data));
        });

        this.socket.on('homeStatus', function (data) {
            if (data.direction !== 'up' && data.direction !== 'both') { return; }
            switch (data.event) {
                case 'sendHomeStatus':
                    Object.assign(dataService.music.musicStatus, data.musicStatus, );
                    Object.assign(dataService.airCtrl.temperature, data.temperature, );
                    Object.assign(dataService.airCtrl.humidity, data.humidity, );
                    Object.assign(dataService.deviceStatus.airConditioner, data.airConditioner, );
                    break;
                default:
                    break;
            }
            console.log(JSON.stringify(data));
            // $rootScope.$digest();
        });


    }


}