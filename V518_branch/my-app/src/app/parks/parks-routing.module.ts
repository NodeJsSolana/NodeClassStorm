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
