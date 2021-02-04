import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionaddComponent } from './direccionadd.component';

describe('DireccionaddComponent', () => {
  let component: DireccionaddComponent;
  let fixture: ComponentFixture<DireccionaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
