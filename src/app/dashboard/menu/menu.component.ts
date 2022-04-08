import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items:any[] = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Login',
      link: '/login'
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
