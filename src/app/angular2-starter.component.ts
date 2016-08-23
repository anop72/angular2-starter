import { Component } from '@angular/core';
import { Angular2StarterService } from './starter.service'
import { SeoService } from './seo.service'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'angular2-starter-app',
  templateUrl: 'angular2-starter.component.html',
  styleUrls: ['angular2-starter.component.css'],
  providers: [Angular2StarterService],
  directives: [ROUTER_DIRECTIVES]
})
export class Angular2StarterAppComponent {
  title = 'angular2-starter works!';

  constructor(service: Angular2StarterService, private _seo: SeoService) {
    this._seo.setTitle('Angular 2 starter');
    this._seo.setMetaRobots('noindex, nofollow');
  }

}
