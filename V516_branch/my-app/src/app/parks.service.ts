import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ParksService {


  constructor(private http:HttpClient) {

  }
  getParks(){

    return this.http.get( "assets/data/data.json").toPromise();

  }


}
