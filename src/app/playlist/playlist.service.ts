import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  albums: any[] = [];

  search = new EventEmitter<string>();
}
