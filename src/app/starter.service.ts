import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Playlist } from './model/playlist';
import 'rxjs/add/operator/map';

@Injectable()
export class Angular2StarterService {

    constructor(private http: Http) {}

    get() {
        return 1;
    }

    getPlaylists() {
        this.http.get('http://www.anop72.info/api/playlist.json')
            .map(res => res.json())
            .map(this.parsePlaylist)
            .subscribe((res:Array<Playlist>) => {
                if (res) {
                    res.forEach(pl => this.getPlaylistById(pl));
                }
            });
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
