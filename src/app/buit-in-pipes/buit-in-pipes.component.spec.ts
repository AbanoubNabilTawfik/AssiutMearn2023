import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuitInPipesComponent } from './buit-in-pipes.component';

describe('BuitInPipesComponent', () => {
  let component: BuitInPipesComponent;
  let fixture: ComponentFixture<BuitInPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuitInPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuitInPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
