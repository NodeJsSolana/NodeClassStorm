import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface DataResponse {
  userId: string;
  id: string;
  title: string;
}



@Injectable({
  providedIn: 'root'
})
export class ParkService {
  url: string = "assets/data/data.json"

  constructor(private http: HttpClient){

  }

  getPark(){
    return this.http.get(this.url).toPromise();
  }
}
