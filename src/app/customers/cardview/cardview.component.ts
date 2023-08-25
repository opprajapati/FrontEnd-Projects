import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  cardViewData: any;
  constructor(private getdata: GetDataService) { }

  ngOnInit(): void {
    console.log("baba")
    this.getdata.getDataCustomer().subscribe((res) => {
      console.log(res);
      this.cardViewData = res;
    })
  }



}
