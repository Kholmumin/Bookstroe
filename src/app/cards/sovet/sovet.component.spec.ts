import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovetComponent } from './sovet.component';

describe('SovetComponent', () => {
  let component: SovetComponent;
  let fixture: ComponentFixture<SovetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SovetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SovetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
