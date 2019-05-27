import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePnjComponent } from './generate-pnj.component';

describe('GeneratePnjComponent', () => {
  let component: GeneratePnjComponent;
  let fixture: ComponentFixture<GeneratePnjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePnjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
