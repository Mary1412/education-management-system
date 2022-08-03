import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForFormsComponent } from './dialog-for-forms.component';

describe('DialogForFormsComponent', () => {
  let component: DialogForFormsComponent;
  let fixture: ComponentFixture<DialogForFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
