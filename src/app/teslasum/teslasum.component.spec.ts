import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslasumComponent } from './teslasum.component';

describe('TeslasumComponent', () => {
  let component: TeslasumComponent;
  let fixture: ComponentFixture<TeslasumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslasumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslasumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
