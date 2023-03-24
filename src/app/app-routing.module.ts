import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.module').then(m => m.MasterViewModule) },
  { path: 'master-view1', loadChildren: () => import('./master-view1/master-view1.module').then(m => m.MasterView1Module) },
  { path: 'master-view11', loadChildren: () => import('./master-view11/master-view11.module').then(m => m.MasterView11Module) },
  { path: 'master-view111', loadChildren: () => import('./master-view111/master-view111.module').then(m => m.MasterView111Module) },
  { path: 'master-view1111', loadChildren: () => import('./master-view1111/master-view1111.module').then(m => m.MasterView1111Module) },
  { path: 'master-view11111', loadChildren: () => import('./master-view11111/master-view11111.module').then(m => m.MasterView11111Module) },
  { path: 'master-view111111', loadChildren: () => import('./master-view111111/master-view111111.module').then(m => m.MasterView111111Module) },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }
