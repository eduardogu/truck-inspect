import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspectionPageRoutingModule } from './inspection-routing.module';

import { InspectionPage } from './inspection.page';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    InspectionPageRoutingModule
  ],
  declarations: [InspectionPage]
})
export class InspectionPageModule {}
