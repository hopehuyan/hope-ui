import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { MenuComponent } from "./menu/menu.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { DashboardRoutingMoudle } from "./dashboard-routing.moudle";
import { SidebarModule } from "primeng/sidebar";


@NgModule({
  declarations: [DashboardComponent, MenuComponent, TopbarComponent],
    imports: [
        CommonModule, DashboardRoutingMoudle, SidebarModule
    ]
})
export class DashboardModule { }
