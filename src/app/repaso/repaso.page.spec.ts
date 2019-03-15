import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasoPage } from './repaso.page';

describe('RepasoPage', () => {
  let component: RepasoPage;
  let fixture: ComponentFixture<RepasoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepasoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
