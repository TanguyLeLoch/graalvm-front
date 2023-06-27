import {TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('makes expected calls', () => {
      const httpClientStub = TestBed.inject(HttpClient);
      spyOn(httpClientStub, 'post').and.callThrough();
      service.login('address');
      expect(httpClientStub.post).toHaveBeenCalled();
    });
  });
});
