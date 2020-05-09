import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list/list.component';
import { LyricsComponent } from './lyrics/lyrics.component';


const routes: Routes = [
  { path: '', component: ListComponent, pathMatch: 'full' },
  { path: 'myPlaylist', component: ListComponent, pathMatch: 'full' },
  { path: 'lyrics/:artist/:track', component: LyricsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
