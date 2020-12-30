import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisclaimerComponent } from './modal-disclaimer.component';

describe('ModalDisclaimerComponent', () => {
  let component: ModalDisclaimerComponent;
  let fixture: ComponentFixture<ModalDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
