import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule } from 'igniteui-angular';
import { ListViewComponent } from './list-view.component';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
