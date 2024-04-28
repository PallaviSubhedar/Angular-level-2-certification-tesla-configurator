import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcarmodelComponent } from './viewcarmodel.component';

describe('ViewcarmodelComponent', () => {
  let component: ViewcarmodelComponent;
  let fixture: ComponentFixture<ViewcarmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcarmodelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcarmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
