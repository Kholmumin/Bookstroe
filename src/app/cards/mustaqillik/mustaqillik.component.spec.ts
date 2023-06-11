import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustaqillikComponent } from './mustaqillik.component';

describe('MustaqillikComponent', () => {
  let component: MustaqillikComponent;
  let fixture: ComponentFixture<MustaqillikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustaqillikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustaqillikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
