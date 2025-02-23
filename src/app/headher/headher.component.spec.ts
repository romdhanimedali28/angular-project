import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadherComponent } from './headher.component';

describe('HeadherComponent', () => {
  let component: HeadherComponent;
  let fixture: ComponentFixture<HeadherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadherComponent]
    });
    fixture = TestBed.createComponent(HeadherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
