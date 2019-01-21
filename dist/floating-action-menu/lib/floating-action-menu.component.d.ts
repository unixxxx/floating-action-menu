import { OnInit } from '@angular/core';
import { FloatingActionButton } from './FloatingActionButton';
export declare class FloatingActionMenuComponent implements OnInit {
    isOpen: boolean;
    state: string;
    placement: string;
    effect: string;
    label: string;
    iconClass: string;
    activeIconClass: string;
    toggle: string;
    buttons: Array<FloatingActionButton>;
    constructor();
    clicked(): boolean;
    entered(): boolean;
    leaved(): boolean;
    ngOnInit(): void;
}
