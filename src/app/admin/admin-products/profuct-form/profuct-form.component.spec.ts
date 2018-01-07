import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfuctFormComponent } from './profuct-form.component';

describe('ProfuctFormComponent', () => {
  let component: ProfuctFormComponent;
  let fixture: ComponentFixture<ProfuctFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfuctFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfuctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
