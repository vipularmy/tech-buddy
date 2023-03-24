import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView111111RoutingModule } from './master-view111111-routing.module';
import { MasterView111111Component } from './master-view111111.component';
import { KanbanView111111Component } from './kanban-view111111/kanban-view111111.component';
import { IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxListModule, IgxNavbarModule, IgxDropDownModule, IgxButtonGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListView111111Component } from './list-view111111/list-view111111.component';

@NgModule({
  declarations: [
    MasterView111111Component,
    KanbanView111111Component,
    ListView111111Component
  ],
  imports: [
    CommonModule,
    MasterView111111RoutingModule,
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
export class MasterView111111Module {
}
