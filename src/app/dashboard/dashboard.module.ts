import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {MenuComponent} from "./menu/menu.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {DashboardRoutingMoudle} from "./dashboard-routing.moudle";
import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [DashboardComponent, MenuComponent, TopbarComponent],
  imports: [
    CommonModule, DashboardRoutingMoudle
  ]
})
export class DashboardModule { }
