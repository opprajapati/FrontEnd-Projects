import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { GridviewComponent } from './gridview/gridview.component';
import { ListviewComponent } from './listview/listview.component';
import { SearchComponent } from './search/search.component';
import { MapviewComponent } from './mapview/mapview.component';
import { EditviewComponent } from './editview/editview.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { CardviewComponent } from './cardview/cardview.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    CustomersComponent,
    GridviewComponent,
    ListviewComponent,
    SearchComponent,
    MapviewComponent,
    EditviewComponent,
    NewcustomerComponent,
    CardviewComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ]

})
export class CustomersModule { }
