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
