import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SocketService } from '../service/socket.service';
import { HttpService } from '../service/http.service';
import { DataService } from '../service/data.service';

import { IndexPage } from '../pages/index/index';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = IndexPage;

  constructor(private socketService: SocketService, private httpService: HttpService, private dataService: DataService, platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      // Registration of push in Android and Windows Phone
      window.addEventListener('popstate', () => {
        if(dataService.runTimeCache.openedModal){
          dataService.runTimeCache.openedModal.dismiss();
          delete dataService.runTimeCache.openedModal;
          history.pushState(null, null, document.URL);
          return;
        }
        if (this.nav.canGoBack()) { //Can we go back?
          if(this.nav.length()>2){history.pushState(null, null, document.URL);}
          this.nav.pop();
        }
      });


    });

    

    //get weather data 
    httpService.getWeather().then(weather => {
      if (weather.status != 'ok') {
        alert('failed to get weather info');
        return;
      }
      console.log(weather);
      dataService.weather = weather;

      console.log(dataService.weather)
    });

  }




}
