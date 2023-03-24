import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView1111Component } from './master-view1111.component';
import { KanbanView1111Component } from './kanban-view1111/kanban-view1111.component';
import { ListView1111Component } from './list-view1111/list-view1111.component';

const routes: Routes = [{ path: '', component: MasterView1111Component, children: [{ path: 'kanban-view1111', component: KanbanView1111Component, data: { text: 'Kanban View (1) (1) (1) (1)' } }, { path: 'list-view1111', component: ListView1111Component, data: { text: 'List View (1) (1) (1) (1)' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView1111RoutingModule {
}
