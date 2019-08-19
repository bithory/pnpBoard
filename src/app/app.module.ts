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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './account/services/token-interceptor/token-interceptor.service';

import { NavbarHorizontalComponent } from './navigation/navbar-horizontal/navbar-horizontal.component';
import { AuthGuard } from './auth.guard';

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
  providers: [AuthGuard, 
    {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
