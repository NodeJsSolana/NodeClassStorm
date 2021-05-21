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
