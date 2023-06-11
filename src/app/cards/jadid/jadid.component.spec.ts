import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadidComponent } from './jadid.component';

describe('JadidComponent', () => {
  let component: JadidComponent;
  let fixture: ComponentFixture<JadidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JadidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
