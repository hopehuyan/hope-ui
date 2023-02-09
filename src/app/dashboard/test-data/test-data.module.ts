import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDataRoutingModule } from './test-data-routing.module';
import { TestDataComponent } from './test-data.component';


@NgModule({
  declarations: [
    TestDataComponent
  ],
  exports: [TestDataComponent],
  imports: [
    CommonModule,
    TestDataRoutingModule
  ]
})
export class TestDataModule { }
