import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component.component';
import { InputNumberModule } from "primeng/inputnumber";
import { ButtonModule } from "primeng/button";
import { TestComponentRoutingModule } from "./test-component-routing.module";
import { InputConfiguratorDirective } from './input-configurator.directive';

@NgModule({
  declarations: [
    TestComponentComponent,
    InputConfiguratorDirective
  ],
  imports: [
    CommonModule,
    InputNumberModule,
    ButtonModule,
    TestComponentRoutingModule,
  ]
})
export class TestComponentModule { }
