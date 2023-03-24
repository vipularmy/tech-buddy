import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView111Component } from './master-view111.component';
import { KanbanView111Component } from './kanban-view111/kanban-view111.component';
import { ListView111Component } from './list-view111/list-view111.component';

const routes: Routes = [{ path: '', component: MasterView111Component, children: [{ path: 'kanban-view111', component: KanbanView111Component, data: { text: 'Kanban View (1) (1) (1)' } }, { path: 'list-view111', component: ListView111Component, data: { text: 'List View (1) (1) (1)' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView111RoutingModule {
}
