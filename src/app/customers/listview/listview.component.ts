import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor(private getData: GetDataService) { }
  listViewData: any;
  ngOnInit(): void {
    this.getData.getDataCustomer().subscribe((res) => {
      this.listViewData = res;
    })
  }

}
