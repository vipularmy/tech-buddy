import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView11111RoutingModule } from './master-view11111-routing.module';
import { MasterView11111Component } from './master-view11111.component';
import { KanbanView11111Component } from './kanban-view11111/kanban-view11111.component';
import { IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxListModule, IgxNavbarModule, IgxDropDownModule, IgxButtonGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListView11111Component } from './list-view11111/list-view11111.component';

@NgModule({
  declarations: [
    MasterView11111Component,
    KanbanView11111Component,
    ListView11111Component
  ],
  imports: [
    CommonModule,
    MasterView11111RoutingModule,
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
export class MasterView11111Module {
}
