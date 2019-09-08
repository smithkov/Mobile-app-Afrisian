import { Component } from '@angular/core';
import { NavController, ModalController,NavParams, LoadingController } from 'ionic-angular';


import { ShortPage } from '../short/short';
import { CartPage } from '../cart/cart';
import { FilterPage } from '../filter/filter';
import { SearchPage } from '../search/search';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { RestProvider, Item } from  './../../providers/rest/rest';
import { Observable } from 'rxjs';
@Component({
  selector: 'page-listing ',
  templateUrl: 'listing.html'
})
export class ListingPage {
  results: Observable<any>;
  url:string = "";
  id:any;
  loading:any;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public  restProvider: RestProvider,
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  )
  {
    this.getItemsByCategory(navParams.get('id'));
    this.url =this.restProvider.getImageUrlItems();
    //this.id = this.navParams.get('id');
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content:'Please wait...'
    });
    this.loading.present();
  }
  getItemsByCategory(id) {
    this.showLoader();
    this.restProvider.getItems(id).subscribe(res=>{
       this.results= res;
       this.loading.dismiss();
    })
   }
   vegetableitems = [
   {
      names: "Fresh Onion - Medium Red 1kg",
      market: "Grocer market",
      image: "assets/imgs/veg-1.jpg",
      prices: "1.50",
   },
   {
      names: "Fresh Onion - Medium Red 1kg",
      market: "Grocer market",
      image: "assets/imgs/veg-2.jpg",
      prices: "1.50",
   },
   {
      names: "Fresh Onion - Medium Red 1kg",
      market: "Grocer market",
      image: "assets/imgs/veg-3.jpg",
      prices: "1.50",
   },
   {
      names: "Fresh Onion - Medium Red 1kg",
      market: "Grocer market",
      image: "assets/imgs/veg-4.jpg",
      prices: "1.50",
   },
   {
      names: "Fresh Onion - Medium Red 1kg",
      market: "Grocer market",
      image: "assets/imgs/veg-5.jpg",
      prices: "1.50",
   },
   {
      names: "Fresh Onion - Medium Red 1kg",
      market: "Grocer market",
      image: "assets/imgs/veg-6.jpg",
      prices: "1.50",
   }

   ];

  shortPage() {
    let modal = this.modalCtrl.create(ShortPage);
    modal.present();
  }

    filterPage() {
    let modal = this.modalCtrl.create(FilterPage);
    modal.present();
  }

  searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }

  cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }

  itemdetailPage(id,name,price) {
    this.navCtrl.push(ItemdetailPage,{
      id:id,
      name:name,
      price:price
    });
  }
}
