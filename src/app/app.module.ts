import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodatkowyKopponentComponent } from './dodatkowy-kopponent/dodatkowy-kopponent.component';

@NgModule({
  declarations: [
    AppComponent,
    DodatkowyKopponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
