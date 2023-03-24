import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxInputGroupModule } from 'igniteui-angular';
import { MasterView11Component } from './master-view11.component';

describe('MasterView11Component', () => {
  let component: MasterView11Component;
  let fixture: ComponentFixture<MasterView11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView11Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
