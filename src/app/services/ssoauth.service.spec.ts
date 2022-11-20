import { TestBed } from '@angular/core/testing';

import { SsoauthService } from './ssoauth.service';

describe('SsoauthService', () => {
  let service: SsoauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsoauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
