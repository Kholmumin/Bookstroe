import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemuriylarComponent } from './temuriylar.component';

describe('TemuriylarComponent', () => {
  let component: TemuriylarComponent;
  let fixture: ComponentFixture<TemuriylarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemuriylarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemuriylarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
