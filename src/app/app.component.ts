import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any;
  private zone;
  private firebaseConfig = {
    apiKey: "AIzaSyBXoCdonuX7LTqh8hu5LcHOxxQ69jMHwvE",
    authDomain: "app-gamer.firebaseapp.com",
    databaseURL: "https://app-gamer.firebaseio.com",
    storageBucket: "app-gamer.appspot.com",
    messagingSenderId: "92945416559"
  };
  constructor(platform: Platform) {
    this.zone = new NgZone({});
    firebase.initializeApp(this.firebaseConfig);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    this.zone.run( () => {
      if (!user) {
        this.rootPage = LoginPage;
        unsubscribe();
      } else { 
        this.rootPage = HomePage; 
        unsubscribe();
      }
    });     
  });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
