import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusinessaccountdisablePage } from './businessaccountdisable.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessaccountdisablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusinessaccountdisablePage]
})
export class BusinessaccountdisablePageModule {}
