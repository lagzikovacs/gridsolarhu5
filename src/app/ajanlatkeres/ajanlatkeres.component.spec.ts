import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjanlatkeresComponent } from './ajanlatkeres.component';

describe('AjanlatkeresComponent', () => {
  let component: AjanlatkeresComponent;
  let fixture: ComponentFixture<AjanlatkeresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjanlatkeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjanlatkeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
