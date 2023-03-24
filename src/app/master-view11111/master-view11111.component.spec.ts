import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule } from 'igniteui-angular';
import { MasterView11111Component } from './master-view11111.component';

describe('MasterView11111Component', () => {
  let component: MasterView11111Component;
  let fixture: ComponentFixture<MasterView11111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView11111Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView11111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
