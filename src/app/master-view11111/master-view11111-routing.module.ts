import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView11111Component } from './master-view11111.component';
import { KanbanView11111Component } from './kanban-view11111/kanban-view11111.component';
import { ListView11111Component } from './list-view11111/list-view11111.component';

const routes: Routes = [{ path: '', component: MasterView11111Component, children: [{ path: 'kanban-view11111', component: KanbanView11111Component, data: { text: 'Kanban View (1) (1) (1) (1) (1)' } }, { path: 'list-view11111', component: ListView11111Component, data: { text: 'List View (1) (1) (1) (1) (1)' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView11111RoutingModule {
}
