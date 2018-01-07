import { TestBed, inject } from '@angular/core/testing';

import { AdminAuthGuard } from './admin.auth.guard.service';

describe('AdminAuth.GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuard]
    });
  });

  it('should be created', inject([AdminAuthGuard], (service: AdminAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
