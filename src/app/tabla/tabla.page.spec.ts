import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPage } from './tabla.page';

describe('TablaPage', () => {
  let component: TablaPage;
  let fixture: ComponentFixture<TablaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
