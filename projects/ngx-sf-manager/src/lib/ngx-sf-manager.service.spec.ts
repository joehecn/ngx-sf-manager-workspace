import { TestBed } from '@angular/core/testing';

import { NgxSfManagerService } from './ngx-sf-manager.service';

describe('NgxSfManagerService', () => {
  let service: NgxSfManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSfManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
