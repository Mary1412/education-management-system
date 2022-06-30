import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvaintComponent } from './invaint.component';

describe('InvaintComponent', () => {
  let component: InvaintComponent;
  let fixture: ComponentFixture<InvaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
