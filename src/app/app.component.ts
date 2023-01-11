import { Component } from '@angular/core';

@Component({
  selector: 'a-root',
  template: `
  <div><h1>{{title}}</h1>
    <a-products></a-products>
  </div>
  `
})
export class AppComponent {
  title: string = 'MyApp';
}

//templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']