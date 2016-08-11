import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { Angular2StarterAppComponent, environment, SeoService } from './app/';

import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2StarterAppComponent, [HTTP_PROVIDERS, SeoService, Title]);
