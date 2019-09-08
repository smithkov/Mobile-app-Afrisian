import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ListingPage } from '../listing/listing';

@Component({
  selector: 'page-category ',
  templateUrl: 'category.html'
})
export class CategoryPage {
 products: string = "vegetables";
  constructor(public navCtrl: NavController) {

  }

  // vegetablePage(){
  //   this.navCtrl.push(VegetablePage);
  //   }

}
