import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxInputGroupModule } from 'igniteui-angular';
import { MasterView1111Component } from './master-view1111.component';

describe('MasterView1111Component', () => {
  let component: MasterView1111Component;
  let fixture: ComponentFixture<MasterView1111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView1111Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView1111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
