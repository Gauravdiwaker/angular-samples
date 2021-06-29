import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPipesComponent } from './all-pipes.component';

describe('AllPipesComponent', () => {
  let component: AllPipesComponent;
  let fixture: ComponentFixture<AllPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
