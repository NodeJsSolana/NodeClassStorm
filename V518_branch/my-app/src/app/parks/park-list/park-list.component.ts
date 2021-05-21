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
