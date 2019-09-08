import { Component,OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController  } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CategoryPage } from '../category/category';
import { ListingPage } from '../listing/listing';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { RestProvider, Item } from  './../../providers/rest/rest';
import { Observable } from 'rxjs';

@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

results: Observable<any>;
url:string = "";
loading:any;
// results:Observable<any>;
// searchTerm='';
// type:SearchType = SearchType.all;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public modalCtrl: ModalController,public  restProvider: RestProvider) {
    this.getCategories();
    this.url =this.restProvider.getImageUrl();
  }
  //private  items : Item[] = [];
  ngOnInit(){

  }
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content:'Please wait...'
    });
    this.loading.present();
  }


  getCategories() {
      this.showLoader();
    this.restProvider.getCategories().subscribe(res=>{
       this.results= res;
       this.loading.dismiss();
    })
  }
  // getItem() {
  //   this.restProvider.getItems().subscribe(res=>{
  //      this.results= res;
  //   })
  // }

  //console.log('');
   slides = [
    {
      title: "20% Off",
      description: "Fruits & Veggies",
      smalltext: "Fresh & healthy",
      image: "assets/imgs/slider-1.jpg",
    },
    {
      title: "20% Off",
      description: "Tops & Tunics",
      image: "assets/imgs/slider-2.jpg",
    },
    {
      title: "20% Off",
      description: "Tops & Tunics",
      image: "assets/imgs/slider-3.jpg",
    }
  ];

     homeicons = [
    {
      name: "Vegetables & Fruits",
      imag: "assets/imgs/1.png",
    },
    {
      name: "Bakery & Dairy Products",
      imag: "assets/imgs/bakery.png",
    },
    {
      name: "Foodgrains, oil & masaala",
      imag: "assets/imgs/foodgrains.png",
    },
    {
      name: "Bevrages & drinks",
      imag: "assets/imgs/beverages.png",
    },
    {
      name: "Branded foods products",
      imag: "assets/imgs/branded.png",
    },
    {
      name: "Beauty & hygiene",
      imag: "assets/imgs/beauty.png",
    },
    {
      name: "Fish, Meet & Eggs",
      imag: "assets/imgs/non-veg.png",
    },
    {
      name: "Household products",
      imag: "assets/imgs/hosehold.png",
    },
    {
      name: "Grument & world food",
      imag: "assets/imgs/gourmet.png",
    }
  ];

   listingPage(event, id){
    this.navCtrl.push(ListingPage, {
      id: id
    });
    }

    searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }

   cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }

}
