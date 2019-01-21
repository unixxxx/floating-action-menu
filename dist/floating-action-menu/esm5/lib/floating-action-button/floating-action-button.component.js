/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FloatingActionButton } from '../FloatingActionButton';
var FloatingActionButtonComponent = /** @class */ (function () {
    function FloatingActionButtonComponent() {
    }
    /**
     * @return {?}
     */
    FloatingActionButtonComponent.prototype.buttonClick = /**
     * @return {?}
     */
    function () {
        this.button.onClick();
        return false;
    };
    /**
     * @return {?}
     */
    FloatingActionButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    FloatingActionButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-floating-action-button',
                    template: "\n    <a\n      href\n      [attr.data-mfb-label]=\"button.label\"\n      (click)=\"buttonClick()\"\n      class=\"mfb-component__button--child\"\n    >\n      <i class=\"mfb-component__child-icon {{ button.iconClass }}\"></i>\n    </a>\n  ",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FloatingActionButtonComponent.ctorParameters = function () { return []; };
    FloatingActionButtonComponent.propDecorators = {
        button: [{ type: Input }]
    };
    return FloatingActionButtonComponent;
}());
export { FloatingActionButtonComponent };
if (false) {
    /** @type {?} */
    FloatingActionButtonComponent.prototype.button;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbG9hdGluZy1hY3Rpb24tbWVudS8iLCJzb3VyY2VzIjpbImxpYi9mbG9hdGluZy1hY3Rpb24tYnV0dG9uL2Zsb2F0aW5nLWFjdGlvbi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRDtJQWlCRTtJQUFlLENBQUM7Ozs7SUFFaEIsbURBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxnREFBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkF4QmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSxrUEFTVDs7aUJBRUY7Ozs7O3lCQUVFLEtBQUs7O0lBVVIsb0NBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQVhZLDZCQUE2Qjs7O0lBQ3hDLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmxvYXRpbmdBY3Rpb25CdXR0b24gfSBmcm9tICcuLi9GbG9hdGluZ0FjdGlvbkJ1dHRvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1mbG9hdGluZy1hY3Rpb24tYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YVxuICAgICAgaHJlZlxuICAgICAgW2F0dHIuZGF0YS1tZmItbGFiZWxdPVwiYnV0dG9uLmxhYmVsXCJcbiAgICAgIChjbGljayk9XCJidXR0b25DbGljaygpXCJcbiAgICAgIGNsYXNzPVwibWZiLWNvbXBvbmVudF9fYnV0dG9uLS1jaGlsZFwiXG4gICAgPlxuICAgICAgPGkgY2xhc3M9XCJtZmItY29tcG9uZW50X19jaGlsZC1pY29uIHt7IGJ1dHRvbi5pY29uQ2xhc3MgfX1cIj48L2k+XG4gICAgPC9hPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9mbG9hdGluZy1hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGbG9hdGluZ0FjdGlvbkJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJ1dHRvbjogRmxvYXRpbmdBY3Rpb25CdXR0b247XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMuYnV0dG9uLm9uQ2xpY2soKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=