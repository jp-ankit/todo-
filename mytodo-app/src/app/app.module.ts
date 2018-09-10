import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AddItemPage} from "../pages/add-item/add-item";
import {IonicStorageModule} from "@ionic/storage";
import { ListProvider } from '../providers/listProviders/listProviders';
import {SQLite} from "@ionic-native/sqlite";
import {SQLitePorter} from "@ionic-native/sqlite-porter";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {NativeStorage} from "@ionic-native/native-storage";
import {DateOrderPipe} from "../pipes/date-order/date-order";
import {GooglePlus} from "@ionic-native/google-plus";
import {HttpClientModule} from "@angular/common/http";
import { File } from '@ionic-native/file';
import {SettingPage} from "../pages/setting/setting";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    DateOrderPipe,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListProvider,
    SQLitePorter,
    SQLite,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    GooglePlus,
    File,
    NativeStorage
  ]
})
export class AppModule {}
