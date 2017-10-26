import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciakComponent } from './referenciak.component';

describe('ReferenciakComponent', () => {
  let component: ReferenciakComponent;
  let fixture: ComponentFixture<ReferenciakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
