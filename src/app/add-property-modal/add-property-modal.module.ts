import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPropertyModalPageRoutingModule } from './add-property-modal-routing.module';

import { AddPropertyModalPage } from './add-property-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPropertyModalPageRoutingModule
  ],
  declarations: [AddPropertyModalPage]
})
export class AddPropertyModalPageModule {}
