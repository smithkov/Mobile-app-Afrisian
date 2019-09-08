import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-cart ',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}
