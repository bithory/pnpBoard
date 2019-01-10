import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {WorldsModule} from './worlds/worlds.module';
import { IndexComponent } from './game-group/index/index.component';

const routes : Routes = [
  {path: '', component: IndexComponent},
  //{path: 'edit', component: EditC}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
