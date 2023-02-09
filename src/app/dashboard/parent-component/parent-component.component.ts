import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Table',
      routerLink: ['/dashboard/home/table']
    },
    {
      label: 'About',
      routerLink: ['/dashboard/home/ripple']
    },
    {
      label: 'Test-data',
      routerLink: ['/dashboard/home/test-data']
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
