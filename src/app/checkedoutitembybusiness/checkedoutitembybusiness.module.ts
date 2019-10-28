import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckedoutitembybusinessPage } from './checkedoutitembybusiness.page';

const routes: Routes = [
  {
    path: '',
    component: CheckedoutitembybusinessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckedoutitembybusinessPage]
})
export class CheckedoutitembybusinessPageModule {}
