import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from '../passenger-dashboard/passenger-dashboard.component';
import { PassCountComponent } from '../pass-count/pass-count.component';
import { PassCardComponent } from '../pass-card/pass-card.component';
import { MaterialModule } from '../../material/material/material.module';



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassCountComponent,
    PassCardComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[
    PassengerDashboardComponent
  ]
})
export class PassengerModule { }
