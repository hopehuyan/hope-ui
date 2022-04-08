import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-ripple-demo',
  templateUrl: './ripple-demo.component.html',
  styleUrls: ['./ripple-demo.component.scss']
})
export class RippleDemoComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
