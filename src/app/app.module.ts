import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgFloatingActionMenuModule } from 'ng-floating-action-menu';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgFloatingActionMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
