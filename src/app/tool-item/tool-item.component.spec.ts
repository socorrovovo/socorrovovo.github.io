import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolItemComponent } from './tool-item.component';

describe('ToolItemComponent', () => {
  let component: ToolItemComponent;
  let fixture: ComponentFixture<ToolItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
