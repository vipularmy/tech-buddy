import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxToggleModule } from 'igniteui-angular';
import { KanbanView111111Component } from './kanban-view111111.component';

describe('KanbanView111111Component', () => {
  let component: KanbanView111111Component;
  let fixture: ComponentFixture<KanbanView111111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanView111111Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanView111111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
