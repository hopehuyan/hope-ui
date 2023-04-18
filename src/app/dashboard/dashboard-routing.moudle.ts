import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./parent-component/parent-component.module').then(m => m.ParentComponentModule)
      },
      {
        path: 'test-data',
        loadChildren: () => import('./test-data/test-data.module').then(m => m.TestDataModule)
      },
      {
        path: 'test-component',
        loadChildren: () => import('./test-component/test-component.module').then(m => m.TestComponentModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingMoudle {
}
