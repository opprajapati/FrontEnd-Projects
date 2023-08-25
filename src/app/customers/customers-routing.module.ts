import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { GridviewComponent } from './gridview/gridview.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { CardviewComponent } from './cardview/cardview.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children: [
      { path: 'cardview', component: CardviewComponent },
      { path: 'gridview', component: GridviewComponent },
      { path: 'listview', component: ListviewComponent },
      { path: 'mapview', component: MapviewComponent },
      { path: 'newcustomer', component: NewcustomerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
