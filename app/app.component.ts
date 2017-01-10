import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}} Weather Dashboard</h1>
  <wea-dashboard></wea-dashboard>`,
})
export class AppComponent  { name = 'Angular'; }
