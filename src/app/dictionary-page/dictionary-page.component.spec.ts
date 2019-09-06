import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryPgeComponent } from './dictionary-page.component';

describe('DictionaryPgeComponent', () => {
  let component: DictionaryPgeComponent;
  let fixture: ComponentFixture<DictionaryPgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryPgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
