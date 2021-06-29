import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePipeComponent } from './multiple-pipe.component';

describe('MultiplePipeComponent', () => {
  let component: MultiplePipeComponent;
  let fixture: ComponentFixture<MultiplePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
