import { Component, OnInit } from '@angular/core';
import {ParkService} from '../park.service';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css']
})
export class ParkListComponent implements OnInit {
  park: any

  constructor(private ParkService: ParkService) { }

  ngOnInit(): void {
    this.ParkService.getPark().then(park => this.park = park)
  }

}
