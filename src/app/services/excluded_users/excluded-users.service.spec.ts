import { TestBed } from '@angular/core/testing';

import { ExcludedUsersService } from './excluded-users.service';

describe('ExcludedUsersService', () => {
  let service: ExcludedUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcludedUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
