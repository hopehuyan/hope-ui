import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildComponentComponent} from "./child-component.component";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [ChildComponentComponent],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class ChildComponentModule { }
