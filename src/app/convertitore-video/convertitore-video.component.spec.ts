import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertitoreVideoComponent } from './convertitore-video.component';

describe('ConvertitoreVideoComponent', () => {
  let component: ConvertitoreVideoComponent;
  let fixture: ComponentFixture<ConvertitoreVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertitoreVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertitoreVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
