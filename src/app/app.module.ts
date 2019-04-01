import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {WorldsModule} from './worlds/worlds.module';
import {IndexComponent} from './worlds/index/index.component';

import { HttpClientModule } from '@angular/common/http';

import { NavbarHorizontalComponent } from './navigation/navbar-horizontal/navbar-horizontal.component';

const routes : Routes = [
  {path: '', component: IndexComponent},
  //{path: 'edit', component: EditC}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarHorizontalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QuillModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
