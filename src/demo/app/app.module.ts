import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFlatpickrkModule } from 'ngx-flatpickr';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxFlatpickrkModule.forRoot(),
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
