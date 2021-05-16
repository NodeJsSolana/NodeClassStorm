import { Component, OnInit } from '@angular/core';
import {ParksService} from '../parks.service'
@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  parks:any;


  constructor(private parkservice:ParksService) {
    this.parkservice.getParks().then(data=> {this.parks=data})
  }

  ngOnInit(): void {
  }

}
