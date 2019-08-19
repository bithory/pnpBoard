import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DefaultComponent},
];

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DefaultModule { }
