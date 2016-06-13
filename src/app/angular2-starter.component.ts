import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Playlist } from './model/playlist';

@Component({
  moduleId: module.id,
  selector: 'angular2-starter-app',
  templateUrl: 'angular2-starter.component.html',
  styleUrls: ['angular2-starter.component.css']
})
export class Angular2StarterAppComponent {
  title = 'angular2-starter works!';
  playlists: Array<Playlist> = [];

  constructor(http: Http) {
    http.get('http://www.anop72.info/api/playlist/2.json')
        .map(res => res.json())
        .map((res:Array<any>) => {
            if (res) {
                res.forEach(r => {
                    this.playlists.push(new Playlist(r.id, r.count, r.filePath, r.title));
                    console.log(r.title);
                })
            }
            return this.playlists;
        })
        .subscribe(res => {
            console.log(res);
        });
    console.log('----');
  }
}
