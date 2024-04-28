import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarconfigComponent } from './carconfig.component';

describe('CarconfigComponent', () => {
  let component: CarconfigComponent;
  let fixture: ComponentFixture<CarconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarconfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
