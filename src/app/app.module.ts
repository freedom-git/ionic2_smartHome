import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AirPage } from '../pages/air/air';
import { AirConditionRemoteCtrlPage } from '../pages/airConditionRemoteCtrl/airConditionRemoteCtrl';
import { MusicPage } from '../pages/music/music';
import { MusicMenusModalsPage } from '../pages/music/musicMenusModals';
import { LightPage } from '../pages/light/light';

import { IndexPage } from '../pages/index/index';
import { SocketService } from '../service/socket.service';
import { HttpService } from '../service/http.service';
import { DataService } from '../service/data.service';

import { SplitMusicNamePipe } from '../pipe/split-music-name.pip';
import { FilterPipe } from '../pipe/filter.pip';

@NgModule({
  declarations: [
    MyApp,
    AirPage,
    AirConditionRemoteCtrlPage,
    MusicPage,
    MusicMenusModalsPage,
    IndexPage,
    LightPage,
    SplitMusicNamePipe,
    FilterPipe
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AirPage,
    AirConditionRemoteCtrlPage,
    MusicPage,
    MusicMenusModalsPage,
    IndexPage,
    LightPage
  ],
  providers: [DataService,SocketService,HttpService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
