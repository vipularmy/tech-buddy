import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView111111Component } from './master-view111111.component';
import { KanbanView111111Component } from './kanban-view111111/kanban-view111111.component';
import { ListView111111Component } from './list-view111111/list-view111111.component';

const routes: Routes = [{ path: '', component: MasterView111111Component, children: [{ path: 'kanban-view111111', component: KanbanView111111Component, data: { text: 'Kanban View (1) (1) (1) (1) (1) (1)' } }, { path: 'list-view111111', component: ListView111111Component, data: { text: 'List View (1) (1) (1) (1) (1) (1)' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView111111RoutingModule {
}
