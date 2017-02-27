import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {

    getWeather(): Promise<any> {
        return this.http.get('https://api.heweather.com/x3/weather?cityid=CN101280800&key=09016c9deba941e39d7f0ebaab9db658')
            .toPromise()
            .then(response => JSON.parse(response['_body'])['HeWeather data service 3.0'][0] as Object)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) {
        console.log('HttpService up');
    }
}