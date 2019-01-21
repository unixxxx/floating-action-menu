/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FloatingActionButton } from '../FloatingActionButton';
export class FloatingActionButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    buttonClick() {
        this.button.onClick();
        return false;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
FloatingActionButtonComponent.decorators = [
    { type: Component, args: [{
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
                styles: [""]
            }] }
];
/** @nocollapse */
FloatingActionButtonComponent.ctorParameters = () => [];
FloatingActionButtonComponent.propDecorators = {
    button: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FloatingActionButtonComponent.prototype.button;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbG9hdGluZy1hY3Rpb24tbWVudS8iLCJzb3VyY2VzIjpbImxpYi9mbG9hdGluZy1hY3Rpb24tYnV0dG9uL2Zsb2F0aW5nLWFjdGlvbi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWdCL0QsTUFBTSxPQUFPLDZCQUE2QjtJQUd4QyxnQkFBZSxDQUFDOzs7O0lBRWhCLFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELFFBQVEsS0FBSSxDQUFDOzs7WUF4QmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7O2FBRUY7Ozs7O3FCQUVFLEtBQUs7Ozs7SUFBTiwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZsb2F0aW5nQWN0aW9uQnV0dG9uIH0gZnJvbSAnLi4vRmxvYXRpbmdBY3Rpb25CdXR0b24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItZmxvYXRpbmctYWN0aW9uLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGFcbiAgICAgIGhyZWZcbiAgICAgIFthdHRyLmRhdGEtbWZiLWxhYmVsXT1cImJ1dHRvbi5sYWJlbFwiXG4gICAgICAoY2xpY2spPVwiYnV0dG9uQ2xpY2soKVwiXG4gICAgICBjbGFzcz1cIm1mYi1jb21wb25lbnRfX2J1dHRvbi0tY2hpbGRcIlxuICAgID5cbiAgICAgIDxpIGNsYXNzPVwibWZiLWNvbXBvbmVudF9fY2hpbGQtaWNvbiB7eyBidXR0b24uaWNvbkNsYXNzIH19XCI+PC9pPlxuICAgIDwvYT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdBY3Rpb25CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBidXR0b246IEZsb2F0aW5nQWN0aW9uQnV0dG9uO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLmJ1dHRvbi5vbkNsaWNrKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19