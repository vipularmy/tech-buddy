import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule } from 'igniteui-angular';
import { ListView1Component } from './list-view1.component';

describe('ListView1Component', () => {
  let component: ListView1Component;
  let fixture: ComponentFixture<ListView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListView1Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
