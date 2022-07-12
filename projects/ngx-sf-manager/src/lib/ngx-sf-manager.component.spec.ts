import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSfManagerComponent } from './ngx-sf-manager.component';

describe('NgxSfManagerComponent', () => {
  let component: NgxSfManagerComponent;
  let fixture: ComponentFixture<NgxSfManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSfManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSfManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
