import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Playlist } from './model/playlist';
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

  constructor(private http: Http, service: Angular2StarterService) {
    console.log(service.get());
    http.get('http://www.anop72.info/api/playlist.json')
        .map(res => res.json())
        .map(this.parsePlaylist)
        .subscribe((res:Array<Playlist>) => {
            if (res) {
                res.forEach(pl => this.getPlaylistById(pl));
            }
        });
    console.log('----');
  }

  private parsePlaylist(items: Array<any>) : Array<Playlist> {
      let result: Array<Playlist> = [];
      if (items) {
          items.forEach(item => {
              result.push(new Playlist(item.id, null, null, item.name));
          })
      }
      return result;
  }

  private getPlaylistById(playlist: Playlist) {
      let selectedUrl = 'http://www.anop72.info/api/playlist/'+playlist.id+'.json';
      console.log(selectedUrl);
      this.http.get(selectedUrl)
          .map(res => res.json())
          .subscribe((res:Array<any>) => {
              if (res) {
                  res.forEach(plSelected => {
                      console.log(plSelected);
                  })
              }
          })
  }

}
