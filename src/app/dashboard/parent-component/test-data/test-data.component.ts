import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.scss']
})
export class TestDataComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.prepareData();
  }

  public prepareData(): void {
  }
}
