import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule } from 'igniteui-angular';
import { ListView111Component } from './list-view111.component';

describe('ListView111Component', () => {
  let component: ListView111Component;
  let fixture: ComponentFixture<ListView111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListView111Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListView111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
