import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaCungCapComponent } from './nha-cung-cap.component';

describe('NhaCungCapComponent', () => {
  let component: NhaCungCapComponent;
  let fixture: ComponentFixture<NhaCungCapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaCungCapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaCungCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
