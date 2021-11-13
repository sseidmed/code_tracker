import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-tracker';

  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/goals', icon: 'view_list', title: 'Goals' },
  ];

}


