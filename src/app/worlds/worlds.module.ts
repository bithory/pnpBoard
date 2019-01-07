import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import{RouterModule, Routes}  from '@angular/router';
import { EditComponent } from './edit/edit.component';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  declarations: [IndexComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class WorldsModule { }
