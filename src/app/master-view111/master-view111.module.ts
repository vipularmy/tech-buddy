import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView111RoutingModule } from './master-view111-routing.module';
import { MasterView111Component } from './master-view111.component';
import { KanbanView111Component } from './kanban-view111/kanban-view111.component';
import { IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxListModule, IgxNavbarModule, IgxDropDownModule, IgxButtonGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListView111Component } from './list-view111/list-view111.component';

@NgModule({
  declarations: [
    MasterView111Component,
    KanbanView111Component,
    ListView111Component
  ],
  imports: [
    CommonModule,
    MasterView111RoutingModule,
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
export class MasterView111Module {
}
