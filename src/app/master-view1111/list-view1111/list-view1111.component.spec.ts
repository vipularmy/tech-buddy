import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule } from 'igniteui-angular';
import { ListView1111Component } from './list-view1111.component';

describe('ListView1111Component', () => {
  let component: ListView1111Component;
  let fixture: ComponentFixture<ListView1111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListView1111Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListView1111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
