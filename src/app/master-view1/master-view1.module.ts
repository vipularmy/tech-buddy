import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView1RoutingModule } from './master-view1-routing.module';
import { MasterView1Component } from './master-view1.component';
import { KanbanView1Component } from './kanban-view1/kanban-view1.component';
import { IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxListModule, IgxNavbarModule, IgxDropDownModule, IgxButtonGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListView1Component } from './list-view1/list-view1.component';

@NgModule({
  declarations: [
    MasterView1Component,
    KanbanView1Component,
    ListView1Component
  ],
  imports: [
    CommonModule,
    MasterView1RoutingModule,
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
export class MasterView1Module {
}
