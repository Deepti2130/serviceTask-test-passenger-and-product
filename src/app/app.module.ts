import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsModule } from './shared/products/products/products.module';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { MaterialModule } from './shared/material/material/material.module';
import { PassengerDashboardComponent } from './shared/passenger/passenger-dashboard/passenger-dashboard.component';
import { PassengerModule } from './shared/passenger/passenger/passenger.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PassengerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
