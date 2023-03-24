import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule } from 'igniteui-angular';
import { MasterView111111Component } from './master-view111111.component';

describe('MasterView111111Component', () => {
  let component: MasterView111111Component;
  let fixture: ComponentFixture<MasterView111111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView111111Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView111111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
