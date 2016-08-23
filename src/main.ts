import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { Angular2StarterAppComponent, environment, SeoService, HomeComponent } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.route';

import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(HomeComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, SeoService, Title]);
