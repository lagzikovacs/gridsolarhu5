import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooldalComponent } from './fooldal.component';

describe('FooldalComponent', () => {
  let component: FooldalComponent;
  let fixture: ComponentFixture<FooldalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooldalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
