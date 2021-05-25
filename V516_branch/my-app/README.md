###### tags: `Web企業運算`

# Park Project


> 下載教材 assets 放入自己的專案

```
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve --open
```

Add bootstrap
```
npm install bootstrap
```


**angular.json**
```
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]
```

```
ng g module parks --routing 
ng g module parks --routing
ng g c parks/park-list
ng g c parks/park-detail
ng g i parks/park
ng g s parks/park-data
ng g s parks/park-data
```

提供介面
**park.ts**
```
export interface Park {
  id: number,
  name: string,
  createDate: string,
  lat: number,
  long: number,
  distance: number,
  image: string,
  state: string,
  data: string
}


export const PARKS:Park[]=[
  {
    id: 0,
    name: "Acadia",
    createDate: "February 26, 1919",
    lat: 44.35,
    long: -68.21,
    distance: 0,
    image: "acadia.jpg",
    state: "Maine",
    data:"Covering most of Mount Desert Island and other coastal islands, Acadia preserves the tallest mountain on the Atlantic coast, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats."
  },
  {
    id: 1,
    name: "American Samoa",
    createDate: "October 31, 1988",
    lat: -14.25,
    long: -170.68,
    distance: 0,
    image: "americansamoa.jpg",
    state: "American Samoa",
    data:"The southernmost national park is on three Samoan islands and protects coral reefs, rainforests volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish."
  }
]

```

routing 提供
**parks-routing.module.ts**

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkDetailComponent} from './park-detail/park-detail.component';
import {ParkListComponent} from './park-list/park-list.component';

const routes: Routes = [
  {path:'parks', component: ParkListComponent},
  {path:'park/:id', component:ParkDetailComponent},
  {path:'', redirectTo:"/parks", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParksRoutingModule { }

```

service 實作
```
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

```

**park app module**
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParksRoutingModule } from './parks-routing.module';
import { ParkListComponent } from './park-list/park-list.component';
import { ParkDetailComponent } from './park-detail/park-detail.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ParkListComponent,
    ParkDetailComponent
  ],
  imports: [
    CommonModule,
    ParksRoutingModule,
    FormsModule
  ]
})
export class ParksModule { }

```



**park-list.component.ts**
```
import { Component, OnInit } from '@angular/core';
import { Park,PARKS } from "../park";
import { ParkDataService } from '../park-data.service';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css']
})
export class ParkListComponent implements OnInit {

  id : number = 0;;
  parks:Park[]=[];
  thePark?:Park;
  searchString:string='';

  constructor(private parkDataServ:ParkDataService) {
    //this.parks=PARKS;
  }

  ngOnInit(): void {
    this.parkDataServ.getPark(this.id).then(data=>this.thePark=data);
  }

  getParks():void{
    this.parkDataServ.getParks().then(data => this.parks = data);
    if(this.searchString && this.searchString.trim()!=''){
      this.parkDataServ.getFilteredParks(this.searchString).then(parks => {
        this.parks = parks;
      })
    }
  }

}

```



**park-list.component.css**
```
*{
  box-sizing:border-box;
 }
 .container{
  display:flex;
  width:100%;
  flex-direction: column;
  justify-content: flex-start;
 }
 .header{
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: cornflowerblue;
 }
 .header> *{
  margin-left:50px;
 }

 .park{
  display:grid;
  grid-template-columns:minmax(200px,1fr) 1fr 1fr;
  grid-template-rows: 60px auto;
  column-gap: 1em;
  row-gap:2em;
 }
 .park-title{
  margin-top: 20px;;
  grid-column: span 3;
 }
 .side{
  grid-column: span 1;

 }
 .center{
  grid-column: 2/span 1;
  display:block;
  justify-content: center;
  align-items: center;
 }
 .right{
  grid-column: 3/span 1;
  display:flex;
  justify-content: center;
  align-items: center;
 }
 img {
  max-width: 100%;
  height: auto;
 }

```


**park-list.component.html**
```
<div class="container">
  <div class="header">
    <h5>US National Parks</h5>
    <input type="search" [(ngModel)]="searchString" placeholder="search">
  <button class="btn btn-primary" (click) ="getParks()">
  search
  </button>
  </div>
  <div class="body">
    <div class="park" *ngFor="let park of parks">

    <h4 class="park-title"> {{park.id}}:{{park.name}}</h4>

    <img clas = "side" src="assets/img/thumbs/{{park.image}}">

    <div class="center">
      <h4>State:{{park.state}}</h4>
      <h6>(lat,long): {{park.lat}}, {{park.long}}</h6>
    </div>

    <div class="right">
      <a routerLink="/park/{{park.id}}">
        <span class="badge bg-primary rounded-pill">> detail </span>
      </a>
    </div>
  </div>

  </div>
</div>

```

**park-detail.component.ts**
```
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Park, PARKS } from '../park';
import { ParkDataService } from '../park-data.service';

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css']
})


export class ParkDetailComponent implements OnInit {
  id : number = 0;;
  parks:Park[]=[];
  thePark?:Park;
  // inject instances of Router and ActivateRoute
  constructor(private route: ActivatedRoute, public router: Router, private location: Location, private parkDataServ:ParkDataService) {
  let id = this.route.snapshot.paramMap.get('id');
  if(id) this.id = parseInt(id);
  this.parkDataServ.getPark(this.id).then(data=>this.thePark=data);
  }

  ngOnInit(): void { }

  goBack(): void {
  this.location.back();
  }

}

```

**park-detail.component.css**
```
*{
  box-sizing:border-box;
 }
 .container {
  display:grid;
  width:100%;
  height:auto;
  grid-template-columns: minmax(200px,30%);
  grid-template-rows:80px 200px auto;
  row-gap:1em;
  column-gap:1em;
 }

 .card {
  display:grid;
  width:100%;
  height:auto;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows:80px 200px auto;
  row-gap:1em;
  column-gap:1em;
 }
 .header, .body{
  grid-column:span 6;
 }
 img {
  max-width: 100%;
  height: auto;
 }

```

**park-detail.component.html**
```
<div class="card" *ngIf="thePark">
  <div class="header" >
  <button class="btn btn-info btn-lg" style="font-size: 20px" (click)="goBack()">
  back
  </button>
  <h1>{{thePark.name}}</h1>
  </div>
  <div class="body img" >
  <img src="assets/img/headers/{{thePark.image}}">
  </div>
  <div class="footer">
  <h5>{{thePark.data}}</h5>
  </div>
</div>

```
