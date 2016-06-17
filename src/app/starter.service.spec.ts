import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from '@angular/core/testing';

import {provide} from '@angular/core';
import {Headers, XHRBackend, Response, ResponseOptions} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Angular2StarterService } from './starter.service';
import { Playlist } from './model/playlist';

describe('Service: StarterService', () => {

  beforeEachProviders(() => {
    return [
      Angular2StarterService,
      provide(XHRBackend, {useClass: MockBackend})
    ];
  });

  it('should create the service',
      inject([Angular2StarterService], (service: Angular2StarterService) => {
          expect(service).toBeTruthy();
  }));

  it('should call get method one time'
    , inject([Angular2StarterService], (service: Angular2StarterService) => {
        expect(service).not.toBe(null);
        spyOn(service, 'get').and.returnValue(1); // mock behavior.
        service.get();
        expect(service.get).toHaveBeenCalledTimes(1);
  }));

  it('should return array of playlist',
    inject([Angular2StarterService], (service: Angular2StarterService) => {
      var items: Array<any> = [{id:463, name:"Moose Ekamai"},{id:463,name:"Moose Ekamai"}];
      expect(items.length).toEqual(2);
      var result = service.parsePlaylist(items);
      expect(result.length).toEqual(2);
      var pl: Playlist = result[0];
      expect(pl).not.toBe(null);
      expect(pl.id).toEqual(463);
  }));

});
