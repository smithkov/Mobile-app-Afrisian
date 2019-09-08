import { Component, ViewChild,Inject } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
import { CategoryPage } from '../pages/category/category';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { My_accountPage } from '../pages/my_account/my_account';
import { Myorder_1Page } from '../pages/myorder_1/myorder_1';  
import { HelpPage } from '../pages/help/help';
import { CartPage } from '../pages/cart/cart';
import { ReviewPage } from '../pages/review/review';
import { LocationPage } from '../pages/location/location';
import { APP_CONFIG, AppConfig } from './app.config';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private globalization: Globalization,
    public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,public translate:TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang('en');
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        this.globalization.getPreferredLanguage().then(result => {
          console.log(result);
          let suitableLang = this.getSuitableLanguage(result.value);
          console.log(suitableLang);
          this.translate.use(suitableLang);
          this.setDirectionAccordingly(suitableLang);
        }).catch(e => {
          console.log(e);
          this.translate.use('en');
          this.platform.setDir('ltr', true);
        });
      } else {
        this.translate.use('en');
        // this.setDirectionAccordingly('en');
        this.setDirectionAccordingly('ar');
      }
    });
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.platform.setDir('ltr', false);
        this.platform.setDir('rtl', true);
        break;
      }
      default: {
        this.platform.setDir('rtl', false);
        this.platform.setDir('ltr', true);
        break;
      }
    }
  }

  setDirection() {
    console.log('plat rtl: ' + this.platform.isRTL);
    if (this.platform.isRTL) {
      this.platform.setDir('rtl', true);
    } else {
      this.platform.setDir('ltr', true);
    }
  }

  getSideOfCurLang() {
    return this.platform.dir() === 'rtl' ? "right" : "left";
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('check for: ' + language);
    return this.config.availableLanguages.some(x => x.code == language) ? language : 'en';
  }
  
  myorder_1Page() {
    this.nav.setRoot(Myorder_1Page);
  }
  
   locationPage() {
    this.nav.setRoot(LocationPage);
  }
  
  my_accountPage() {
    this.nav.setRoot(My_accountPage);
  }
  
   categoryPage() {
    this.nav.setRoot(CategoryPage);
  }
  
   homePage() {
    this.nav.setRoot(HomePage);
  }
  
  reviewPage() {
    this.nav.setRoot(ReviewPage);
  }
  
  wishlistPage() {
    this.nav.setRoot(WishlistPage);
  }
  
  cartPage() {
    this.nav.setRoot(CartPage);
  }
  
  helpPage() {
    this.nav.setRoot(HelpPage);
  }
  
  phonenumberPage() {
    this.nav.setRoot(PhonenumberPage);
  }
}
