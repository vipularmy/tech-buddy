import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView1Component } from './master-view1.component';
import { KanbanView1Component } from './kanban-view1/kanban-view1.component';
import { ListView1Component } from './list-view1/list-view1.component';

const routes: Routes = [{ path: '', component: MasterView1Component, children: [{ path: 'kanban-view1', component: KanbanView1Component, data: { text: 'Kanban View (1)' } }, { path: 'list-view1', component: ListView1Component, data: { text: 'List View (1)' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView1RoutingModule {
}
