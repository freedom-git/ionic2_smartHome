import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    runTimeCache:any={};

    weather: { basic: Object, aqi: { city: Object }, now: { cond: Object } };
    airCtrl = {
        temperature: {
            value: 0,
            lowerLimit: 25,
            upperLimit: 27,
            autoCtrlStatus: false,
            airConditioningStatus: 'off'
        },
        humidity: {
            value: 0,
            lowerLimit: 60,
            upperLimit: 90,
            autoCtrlStatus: false
        }
    };
    music: { musicFileList: Array<string>, musicStatus: { musicIndex: number, status: string, mode: string } };
    deviceStatus= {
        airConditioner: {
            mode: 'coldMode',
            windGrade: 3,
            windAutoDirection: false,
            settingTem: 25
        }
    };



    constructor() {
        this.weather = { basic: {}, aqi: { city: {} }, now: { cond: {} } };
        this.music = { musicFileList: [], musicStatus: { musicIndex: 0, status: '', mode: '' } };
        console.log('DataService up');
    }
}