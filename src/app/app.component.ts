import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'lesson-2';
  public password: any;

  constructor() {
  }

  printHello() {

  }

  reset(): void {
    this.password = '';
  }

  checkLoginPassword() {

  }
}
