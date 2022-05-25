import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmesiteComponent } from './confirmesite.component';

describe('ConfirmesiteComponent', () => {
  let component: ConfirmesiteComponent;
  let fixture: ComponentFixture<ConfirmesiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmesiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
