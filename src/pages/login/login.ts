import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  
  }

  goToSignupPage(){
    this.navCtrl.push(SignupPage);
  }

}
