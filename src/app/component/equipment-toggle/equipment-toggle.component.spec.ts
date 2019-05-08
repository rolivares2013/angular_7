import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentToggleComponent } from './equipment-toggle.component';

describe('EquipmentToggleComponent', () => {
  let component: EquipmentToggleComponent;
  let fixture: ComponentFixture<EquipmentToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
