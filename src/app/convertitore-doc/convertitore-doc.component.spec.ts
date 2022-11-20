import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertitoreDocComponent } from './convertitore-doc.component';

describe('ConvertitoreDocComponent', () => {
  let component: ConvertitoreDocComponent;
  let fixture: ComponentFixture<ConvertitoreDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertitoreDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertitoreDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
