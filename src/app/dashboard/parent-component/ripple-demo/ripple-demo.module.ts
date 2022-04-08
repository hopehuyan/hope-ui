import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleDemoComponent } from './ripple-demo.component';
import {RippleModule} from "primeng/ripple";
import {SplitterModule} from "primeng/splitter";



@NgModule({
  declarations: [
    RippleDemoComponent
  ],
  imports: [
    CommonModule,
    RippleModule,
    SplitterModule
  ]
})
export class RippleDemoModule { }
