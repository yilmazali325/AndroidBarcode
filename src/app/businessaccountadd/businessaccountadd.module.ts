import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusinessaccountaddPage } from './businessaccountadd.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessaccountaddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusinessaccountaddPage]
})
export class BusinessaccountaddPageModule {}
