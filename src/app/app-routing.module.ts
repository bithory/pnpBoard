import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { 
    path: 'worlds', 
    loadChildren : './worlds/worlds.module#WorldsModule',
    canActivate : [AuthGuard],
  },
  { 
    path: 'parties', 
    loadChildren : './parties/parties.module#PartiesModule', 
    canActivate : [AuthGuard],
  },
  { 
    path: 'notes', 
    loadChildren : './notes/notes.module#NotesModule', 
    canActivate: [AuthGuard],
  },
  { 
    path: 'tags', 
    loadChildren : './tags/tags.module#TagsModule',
    canActivate: [AuthGuard],
  },
  { 
    path: 'account', 
    loadChildren: './account/account.module#AccountModule',
  },
  { 
    path: '', 
    loadChildren : './account/account.module#AccountModule', 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
