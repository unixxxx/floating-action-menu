# ng-floating-action-menu

updated version of [ng2-floating-button](https://github.com/tahashahid/ng2-floating-button)

## Installation

```bash
$ npm install ng-floating-action-menu --save
```

## usage

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgFloatingActionMenuModule } from 'ng-floating-action-menu';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgFloatingActionMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**component.html**

```xml
   <ng-floating-action-menu
     [placement]="config.placment"
     [effect]="config.effect"
     [label]="config.label"
     [iconClass]="config.iconClass"
     [activeIconClass]="config.activeIconClass"
     [toggle]="config.toggle"
     [buttons]="buttons">
   </ng-floating-action-menu>
```

**component.ts**

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  config;
  buttons: Array<FloatingActionButton> = [
    {
      iconClass: 'ion-social-github',
      label: 'follow me on github',
      onClick: function() {}
    },
    {
      iconClass: 'ion-social-facebook',
      label: 'follow me on facebook',
      onClick: function() {}
    },
    {
      iconClass: 'ion-social-linkedin',
      label: 'linkedin',
      onClick: function() {}
    }
  ];

  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    }
  ];

  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];

  toggles = ['click', 'hover'];

  constructor() {
    this.config = {
      placment: 'br',
      effect: 'mfb-zoomin',
      label: 'main button label',
      iconClass: 'ion-plus-round',
      activeIconClass: 'ion-close-round',
      toggle: 'click',
      buttons: this.buttons
    };
  }
}
```

## License

MIT © [Shalva Jashiashvili](mailto:sh.jashiashvili@gmail.com)
