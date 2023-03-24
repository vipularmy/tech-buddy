import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'kanban-view', pathMatch: 'full' }, { path: 'kanban-view', component: KanbanViewComponent, data: { text: 'Kanban View' } }, { path: 'list-view', component: ListViewComponent, data: { text: 'List View' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
