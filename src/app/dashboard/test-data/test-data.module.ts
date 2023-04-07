import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDataRoutingModule } from './test-data-routing.module';
import { TestDataComponent } from './test-data.component';
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { BlockUIModule } from "primeng/blockui";


@NgModule({
  declarations: [
    TestDataComponent
  ],
  exports: [TestDataComponent],
  imports: [
    CommonModule,
    TestDataRoutingModule,
    ButtonModule,
    TableModule,
    BlockUIModule
  ],
})
export class TestDataModule { }
