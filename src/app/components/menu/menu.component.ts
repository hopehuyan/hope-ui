import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
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
      icon: 'pi pi-ellipsis-h',
      items: [
        {
          label: 'Input Number',
          icon: 'pi pi-link',
          url: '/dashboard/test-component',
        },
      ]
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.items.forEach(item => {
        item.items?.map(child => {
          if (this.router.url.indexOf(String(child.url)) === 0) {
            item.expanded = true;
          }
        });
        if (this.router.url.indexOf(String(item.url)) === 0) {
          item.expanded = true;
        }
      }
    );
  }

  onMenuClick(item: MenuItem): void {
    item.expanded = !item.expanded;

    this.items.filter(res => res.url !== item.url).forEach(item => item.expanded = false);
  }
}
