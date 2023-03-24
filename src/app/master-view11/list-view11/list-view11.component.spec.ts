import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule } from 'igniteui-angular';
import { ListView11Component } from './list-view11.component';

describe('ListView11Component', () => {
  let component: ListView11Component;
  let fixture: ComponentFixture<ListView11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListView11Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListView11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
