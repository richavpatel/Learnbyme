import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
result: any;
  constructor(private _fetchdata: FetchdataService) { }

  ngOnInit() {
    this.result = this._fetchdata.data;
  }

}
