import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageItemesComponent } from './manage-itemes.component';

describe('ManageItemesComponent', () => {
  let component: ManageItemesComponent;
  let fixture: ComponentFixture<ManageItemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageItemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageItemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
