import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView11Component } from './master-view11.component';
import { KanbanView11Component } from './kanban-view11/kanban-view11.component';
import { ListView11Component } from './list-view11/list-view11.component';

const routes: Routes = [{ path: '', component: MasterView11Component, children: [{ path: 'kanban-view11', component: KanbanView11Component, data: { text: 'Kanban View (1) (1)' } }, { path: 'list-view11', component: ListView11Component, data: { text: 'List View (1) (1)' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView11RoutingModule {
}
