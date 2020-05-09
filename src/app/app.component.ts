import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from './configuration';
import { PlaylistService } from './playlist/playlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  searchText: string = "";

  constructor(private playlistService: PlaylistService) {

  }

  search() {
    this.playlistService.search.next(this.searchText);
  }

}
