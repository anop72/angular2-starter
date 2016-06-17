import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {
  ResponseOptions,
  Response,
  Http,
  BaseRequestOptions,
  RequestMethod
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Angular2StarterService } from './starter.service';

beforeEachProviders(() => [Angular2StarterService, MockBackend]);

describe('Service: StarterService', () => {

  it('should create the service',
      inject([Angular2StarterService], (service: Angular2StarterService) => {
          expect(service).toBeTruthy();
  }));

  it('should call get method one time'
    , inject([Angular2StarterService], (service: Angular2StarterService) => {
        expect(service).not.toBe(null);
        spyOn(service, 'get').and.returnValue(1);
        service.get();
        expect(service.get).toHaveBeenCalledTimes(1);
  }));

});
