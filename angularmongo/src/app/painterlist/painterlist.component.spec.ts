import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainterlistComponent } from './painterlist.component';

describe('PainterlistComponent', () => {
  let component: PainterlistComponent;
  let fixture: ComponentFixture<PainterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
