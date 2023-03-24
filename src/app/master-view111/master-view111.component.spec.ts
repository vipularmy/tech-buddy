import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxInputGroupModule } from 'igniteui-angular';
import { MasterView111Component } from './master-view111.component';

describe('MasterView111Component', () => {
  let component: MasterView111Component;
  let fixture: ComponentFixture<MasterView111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView111Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
