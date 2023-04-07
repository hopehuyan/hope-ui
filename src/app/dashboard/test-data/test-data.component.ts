import { Component, OnInit } from '@angular/core';
import { FreeApiService } from "../../common/services/free-api.service";
import { HolidayModel } from "../../common/models/holiday.model";

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.scss'],
})
export class TestDataComponent implements OnInit {
  holidayModels:  HolidayModel[] = [];
  loading = false;
  constructor(private readonly _freeApiService: FreeApiService) {
  }

  ngOnInit(): void {
  }

  getCityData() {
    this.loading = true;
    this._freeApiService.getCityData().subscribe(res => {
      this.holidayModels = res.data;
      this.loading = false;
    });
  }
}
