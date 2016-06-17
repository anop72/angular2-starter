import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HTTP_PROVIDERS } from '@angular/http';
import { Angular2StarterService } from './starter.service';

beforeEachProviders(() => [Angular2StarterService, HTTP_PROVIDERS]);

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
