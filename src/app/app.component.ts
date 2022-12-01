import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{title}}</h1>
  <div>My Frist Component</div>
  </div>
  `
})
export class AppComponent {
  title: string = 'MyAngularApp';
}

//templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']