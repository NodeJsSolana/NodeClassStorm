import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfoiloComponent } from './protfoilo.component';

describe('ProtfoiloComponent', () => {
  let component: ProtfoiloComponent;
  let fixture: ComponentFixture<ProtfoiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtfoiloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtfoiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
