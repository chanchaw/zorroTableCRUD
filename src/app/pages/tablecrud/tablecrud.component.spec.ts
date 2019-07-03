import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecrudComponent } from './tablecrud.component';

describe('TablecrudComponent', () => {
  let component: TablecrudComponent;
  let fixture: ComponentFixture<TablecrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
