import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPropertyModalPage } from './add-property-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddPropertyModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPropertyModalPageRoutingModule {}
