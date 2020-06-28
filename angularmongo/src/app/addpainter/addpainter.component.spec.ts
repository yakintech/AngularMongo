import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpainterComponent } from './addpainter.component';

describe('AddpainterComponent', () => {
  let component: AddpainterComponent;
  let fixture: ComponentFixture<AddpainterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpainterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
