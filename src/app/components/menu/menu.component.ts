import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items:MenuItem[] = [
    {
      label: 'Home',
      url: '/dashboard/home',
      icon: 'pi pi-home'
    },
    {
      label: 'Test Data',
      url: '/dashboard/test-data',
      icon: 'pi pi-link'
    },
    {
      label: 'PrimeNG Component',
      url: '/dashboard/test-component',
      icon: 'pi pi-ellipsis-h',
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
