import { Component } from '@angular/core';
import { NavParams,NavController, ModalController, LoadingController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { ShippiningPage } from '../shippining/shippining';
import { RestProvider, Item } from  './../../providers/rest/rest';
import { Observable } from 'rxjs';
@Component({
  selector: 'page-itemdetail ',
  templateUrl: 'itemdetail.html'
})
export class ItemdetailPage {
  results: Observable<any>;
  url:string = "";
  id:any;
  itemName:any;
  itemPrice:any;
  loading:any;
  weight:any;
  definition:any;
  img:any;
  constructor(
    public navCtrl: NavController,
     public modalCtrl: ModalController,
     public  restProvider: RestProvider,
     public loadingCtrl: LoadingController,
     public navParams: NavParams
   )
   {
     this.getImagesByItem(navParams.get('id'));
     this.itemName = navParams.get('name');
     this.itemPrice = navParams.get('price');
     this.url =this.restProvider.getImageUrlItems();


  }
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content:'Please wait...'
    });
    this.loading.present();
  }
  getImagesByItem(id) {
    this.showLoader();
    this.restProvider.getItemDetailPage(id).subscribe(res=>{
       this.loading.dismiss();
       this.results= res;
       this.weight = this.results[0].item.weight;
       this.definition = this.results[0].item.definition;
       this.img = this.results[0].item.defaultImg;
       //alert(this.img)
    })
   }
  searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }

   shippiningPage() {
    this.navCtrl.push(ShippiningPage);
  }

    cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
}
