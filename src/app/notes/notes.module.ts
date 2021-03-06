import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill'

import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {path: ':partyId', component: IndexComponent},
  {path: 'edit/:mode/:partyId/:id', component: EditComponent},
  {path: 'view/:mode/:partyId/:id', component: EditComponent},
];

@NgModule({
  declarations: [IndexComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    QuillModule,
  ]
})
export class NotesModule { }
