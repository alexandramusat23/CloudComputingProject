import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../configuration';
import { PlaylistService } from '../../playlist/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  data: any[];

  constructor(private httpClient: HttpClient, private playlistService: PlaylistService, private route: Router) {

  }

  ngOnInit() {
    if (this.route.url.includes("myPlaylist")) {
      this.data = this.playlistService.albums;
    }
    this.search();
  }

  addToMyPlaylist(album) {
    album['included'] = true;
    this.playlistService.albums.push(album);
  }

  remove(album) {
    album.included = false;
    this.playlistService.albums.splice(this.playlistService.albums.findIndex(a => a.collectionId == album.collectionId), 1);
  }

  loadData(artist: string) {

    artist.replace(' ', '+');

    this.httpClient.get<any>(`${Configuration.itunesBaseUrl}search?term=${artist}&enitity=album`).subscribe(data => {
      this.data = data.results;
      this.data.forEach(d => {
        if (this.playlistService.albums.find(dp => dp.collectionId == d.collectionId))
          d.included = true;
      });
    });

  }

  search() {
    this.playlistService.search.subscribe(text => {
      this.loadData(text);
    });
  }

  goToLyrics(track) {
    this.route.navigate(['/lyrics', track.artistName, track.trackName]);
  }

}
