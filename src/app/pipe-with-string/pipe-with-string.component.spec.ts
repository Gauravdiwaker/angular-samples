import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeWithStringComponent } from './pipe-with-string.component';

describe('PipeWithStringComponent', () => {
  let component: PipeWithStringComponent;
  let fixture: ComponentFixture<PipeWithStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeWithStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeWithStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
