import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {path: ':partyId/:userId', component: IndexComponent},
  {path: 'edit/:partyId/:userId', component: EditComponent},
];

@NgModule({
  declarations: [IndexComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class NotesModule { }
