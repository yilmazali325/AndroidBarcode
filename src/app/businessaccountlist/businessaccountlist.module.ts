import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusinessaccountlistPage } from './businessaccountlist.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessaccountlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusinessaccountlistPage]
})
export class BusinessaccountlistPageModule {}
