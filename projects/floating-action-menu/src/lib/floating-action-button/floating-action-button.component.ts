import { Component, OnInit, Input } from '@angular/core';
import { FloatingActionButton } from '../FloatingActionButton';

@Component({
  selector: 'ng2-floating-action-button',
  template: `
    <a
      href
      [attr.data-mfb-label]="button.label"
      (click)="buttonClick()"
      class="mfb-component__button--child"
    >
      <i class="mfb-component__child-icon {{ button.iconClass }}"></i>
    </a>
  `,
  styleUrls: ['./floating-action-button.component.css']
})
export class FloatingActionButtonComponent implements OnInit {
  @Input() button: FloatingActionButton;

  constructor() {}

  buttonClick() {
    this.button.onClick();
    return false;
  }

  ngOnInit() {}
}
