import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView1111RoutingModule } from './master-view1111-routing.module';
import { MasterView1111Component } from './master-view1111.component';
import { KanbanView1111Component } from './kanban-view1111/kanban-view1111.component';
import { IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxListModule, IgxNavbarModule, IgxDropDownModule, IgxButtonGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListView1111Component } from './list-view1111/list-view1111.component';

@NgModule({
  declarations: [
    MasterView1111Component,
    KanbanView1111Component,
    ListView1111Component
  ],
  imports: [
    CommonModule,
    MasterView1111RoutingModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxToggleModule,
    FormsModule,
    IgxListModule,
    IgxNavbarModule,
    IgxDropDownModule,
    IgxButtonGroupModule
  ]
})
export class MasterView1111Module {
}
