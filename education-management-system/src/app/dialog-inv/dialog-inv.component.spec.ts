import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInvComponent } from './dialog-inv.component';

describe('DialogInvComponent', () => {
  let component: DialogInvComponent;
  let fixture: ComponentFixture<DialogInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
