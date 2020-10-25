import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetalertComponent } from './resetalert.component';

describe('ResetalertComponent', () => {
  let component: ResetalertComponent;
  let fixture: ComponentFixture<ResetalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
