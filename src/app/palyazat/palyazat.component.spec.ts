import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PalyazatComponent } from './palyazat.component';

describe('PalyazatComponent', () => {
  let component: PalyazatComponent;
  let fixture: ComponentFixture<PalyazatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PalyazatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalyazatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
