import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView11RoutingModule } from './master-view11-routing.module';
import { MasterView11Component } from './master-view11.component';
import { KanbanView11Component } from './kanban-view11/kanban-view11.component';
import { IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxListModule, IgxNavbarModule, IgxDropDownModule, IgxButtonGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListView11Component } from './list-view11/list-view11.component';

@NgModule({
  declarations: [
    MasterView11Component,
    KanbanView11Component,
    ListView11Component
  ],
  imports: [
    CommonModule,
    MasterView11RoutingModule,
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
export class MasterView11Module {
}
