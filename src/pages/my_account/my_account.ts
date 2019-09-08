import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my_account ',
  templateUrl: 'my_account.html'
})
export class My_accountPage {
 account: string = "profile";
  constructor(public navCtrl: NavController) {

  }

}
