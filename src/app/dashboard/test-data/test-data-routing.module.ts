import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDataComponent } from "./test-data.component";

const routes: Routes = [
  {
    path: '',
    component: TestDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDataRoutingModule { }
