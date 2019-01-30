import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RackAddEditComponent } from './rack-add-edit.component';

describe('RackAddEditComponent', () => {
  let component: RackAddEditComponent;
  let fixture: ComponentFixture<RackAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
