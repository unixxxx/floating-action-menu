import { NgModule } from '@angular/core';
import { FloatingActionMenuComponent } from './floating-action-menu.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FloatingActionMenuComponent, FloatingActionButtonComponent],
  imports: [CommonModule],
  exports: [FloatingActionMenuComponent, FloatingActionButtonComponent]
})
export class FloatingActionMenuModule {}
