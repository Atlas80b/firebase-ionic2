import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupValidator } from '../../validators/signup-validator';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  signupForm: FormGroup;
  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private formBuilder: FormBuilder) {
                this.signupForm = formBuilder.group({
                username: ['',Validators.compose([Validators.required]), SignupValidator.checkUsername],
                password: ['',Validators.compose([Validators.required]), ],
                passwordConf: ['',Validators.compose([Validators.required]), ],
                email: ['']
    });

              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
