import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import{RouterModule, Routes}  from '@angular/router';
import { EditComponent } from './edit/edit.component';

import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'view/:id', component: ViewComponent},
];

@NgModule({
  declarations: [IndexComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class WorldsModule { }
