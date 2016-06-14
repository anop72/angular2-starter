import { Component } from '@angular/core';
import { Angular2StarterService } from './starter.service'

@Component({
  moduleId: module.id,
  selector: 'angular2-starter-app',
  templateUrl: 'angular2-starter.component.html',
  styleUrls: ['angular2-starter.component.css'],
  providers: [Angular2StarterService]
})
export class Angular2StarterAppComponent {
  title = 'angular2-starter works!';

  constructor(service: Angular2StarterService) {
    service.getPlaylists();
    console.log('----');
  }
  
}
