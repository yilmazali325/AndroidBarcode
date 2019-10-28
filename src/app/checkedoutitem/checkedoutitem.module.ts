import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckedoutitemPage } from './checkedoutitem.page';

const routes: Routes = [
  {
    path: '',
    component: CheckedoutitemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckedoutitemPage]
})
export class CheckedoutitemPageModule {}
