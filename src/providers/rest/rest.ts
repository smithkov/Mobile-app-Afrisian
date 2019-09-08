import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {

  baseUrl:string = "https://afrigrocery.herokuapp.com/api/";
  //baseUrl:string = "http://localhost:3000/api/";
  imageUrl:string = "https://afrigrocery.herokuapp.com/";

  constructor(public http: HttpClient) {
    // console.log('Hello RestProvider Provider');
    // this.getItems();
  }

//   items() {
//     return this.http.get<any>(this.baseUrl + 'item/items').pipe(
//         map(model => {
//             return model.results;
//         })
//     );
// }
getImageUrl(): string {return this.imageUrl+"uploads/"};
getImageUrlItems(): string {return this.imageUrl+"Images/"};
getItems(id:any):Observable<any> {
    return this.http.get(this.baseUrl + 'item/getCategory/' + id)
      .pipe(map(results=>{
        return results['data']
      }))
  };

getItemDetailPage(id:any):Observable<any> {
    return this.http.get(this.baseUrl + 'image/item/' + id)
      .pipe(map(results=>{
        return results['data']
      }))
  };


  getCategories():Observable<any> {
      return this.http.get(this.baseUrl + 'category/list')
        .pipe(map(results=>{
          return results['data']
        }))
    }
}


export  class  Item {

  name: string;

  weight: string;
  price: string;

  defaultImg:string;

  constructor(values: Object = {}) {

  Object.assign(this, values);

  }
}
