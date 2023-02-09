import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParentComponentComponent} from "./parent-component.component";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {TabMenuModule} from "primeng/tabmenu";
import {ParentRoutingMoudle} from "./parent-routing.moudle";
import {ChildComponentModule} from "./child-component/child-component.module";
import {RippleDemoModule} from "./ripple-demo/ripple-demo.module";
import { TestDataComponent } from './test-data/test-data.component';



@NgModule({
  declarations: [ParentComponentComponent, TestDataComponent],
  exports: [
    ParentComponentComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    TabMenuModule,
    ParentRoutingMoudle,
    ChildComponentModule,
    RippleDemoModule
  ]
})
export class ParentComponentModule { }
