import { TestBed } from '@angular/core/testing';

import { MascotaserviceService } from './mascotaservice.service';

describe('MascotaserviceService', () => {
  let service: MascotaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});