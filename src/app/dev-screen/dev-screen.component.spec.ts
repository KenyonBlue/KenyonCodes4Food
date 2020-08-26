import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevScreenComponent } from './dev-screen.component';

describe('DevScreenComponent', () => {
  let component: DevScreenComponent;
  let fixture: ComponentFixture<DevScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
