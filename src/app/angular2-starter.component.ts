import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'angular2-starter-app',
  templateUrl: 'angular2-starter.component.html',
  styleUrls: ['angular2-starter.component.css']
})
export class Angular2StarterAppComponent {
  title = 'angular2-starter works!';

  constructor(http: Http) {
    http.get('http://www.anop72.info/api/playlist/2.json').subscribe(res => {
        console.log('---- ' + res.json());
    });
    console.log('----');
  }

}
