import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NetworkDetectionModule } from './shared/network-detection/network-detection.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NetworkDetectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
