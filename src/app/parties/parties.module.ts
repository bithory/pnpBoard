import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'edit/:mode/:id', component: EditComponent},
  {path: 'view/:mode/:id', component: EditComponent},
];

@NgModule({
  declarations: [
    IndexComponent,
    EditComponent, 
    // EditComponent, 
    // ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PartiesModule { }
