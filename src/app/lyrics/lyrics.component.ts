import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html'
})
export class LyricsComponent implements OnInit {

  data: any;

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p.artist && p.track) {
        this.getLyrics(p.artist, p.track);
      }
    });
  }

  getLyrics(artist: string, track: string) {
    this.httpClient.get<any>(Configuration.lyricsUrl + `/${artist}/${track}?apikey=${Configuration.apiKey}`).subscribe(data => {
      this.data = data.result;
    });
  }

}
