import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  constructor(private getData: GetDataService) { }
  gridViewDta: any;
  ngOnInit(): void {
    this.getData.getDataCustomer().subscribe((res) => {
      this.gridViewDta = res;
    })

  }

}
