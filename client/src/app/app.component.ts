import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      
      
      <h1>
      {{title}}
          <app-test></app-test>
  </h1>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app works!';
}
