import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAveComponent } from './crear-ave.component';

describe('CrearAveComponent', () => {
  let component: CrearAveComponent;
  let fixture: ComponentFixture<CrearAveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
