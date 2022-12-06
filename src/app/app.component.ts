import { Component } from '@angular/core';

@Component({
  selector: 'a-root',
  template: `
  <div><h1>{{title}}</h1>
  <div>My Frist Component</div>
  </div>
  `
})
export class AppComponent {
  title: string = 'MyAnimeApp';
}

//templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']