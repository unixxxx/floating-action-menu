import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFloatingActionMenuComponent } from './ng-floating-action-menu.component';
import { NgFloatingActionButtonComponent } from './ng-floating-action-button.component';

@NgModule({
  declarations: [
    NgFloatingActionMenuComponent,
    NgFloatingActionButtonComponent
  ],
  imports: [CommonModule],

  exports: [NgFloatingActionMenuComponent, NgFloatingActionButtonComponent]
})
export class NgFloatingActionMenuModule {}
