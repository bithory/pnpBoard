import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  { path: 'worlds', loadChildren : './worlds/worlds.module#WorldsModule'},
  { path: 'parties', loadChildren : './parties/parties.module#PartiesModule'},
  { path: 'notes', loadChildren : './notes/notes.module#NotesModule'},
  { path: 'tags', loadChildren : './tags/tags.module#TagsModule'},
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: '', loadChildren : './account/account.module#AccountModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
