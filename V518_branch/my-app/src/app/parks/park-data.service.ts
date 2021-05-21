import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Park} from './park';


@Injectable({
  providedIn: 'root'
})
export class ParkDataService {

  parks?: Park[];


  constructor(private http:HttpClient) { }

  getParks():Promise <Park[]> {
    if (this.parks) {
      return Promise.resolve(this.parks);
    }
    return (new Promise(resolve => {
      this.http.get('assets/data/data.json')
      .subscribe((data) => {
      this.parks = data as Park[];
      resolve(this.parks);
      });
      }));
  }

  getPark(index:number):Promise<Park>{
    return this.getParks().then(data => {
      return data[index] as Park;
    });
  }

  getFilteredParks(queryString: string):Promise<Park[]>{
    return this.getParks().then(data => {
      const theFilteredParks: Park[] = [];
      for (let thePark of data as Park[]) {
        if (thePark.name.toLowerCase().indexOf(queryString.toLowerCase()) > -1) {
          theFilteredParks.push(thePark);
        }
      }
      return theFilteredParks as Park[];
    })
  }

}
