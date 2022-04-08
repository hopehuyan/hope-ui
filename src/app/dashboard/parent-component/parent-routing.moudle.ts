import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentComponentComponent} from "./parent-component.component";
import {ChildComponentComponent} from "./child-component/child-component.component";

const routes: Routes = [
  {
    path: '',
    component: ParentComponentComponent,
    children: [
      {
        path: 'table',
        component: ChildComponentComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingMoudle {
}
