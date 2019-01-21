import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FloatingActionMenuModule } from 'projects/floating-action-menu/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FloatingActionMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
