import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items:any[] = [
    {
      name: 'Home',
      linkUrl: '/dashboard/home',
      icon: 'pi pi-home'
    },
    {
      name: 'About',
      linkUrl: '/about'
    },
    {
      name: 'Contact',
      linkUrl: '/contact'
    },
    {
      name: 'Login',
      linkUrl: '/login'
    },
    {
      name: 'Register',
      link: '/register'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
