import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'lesson-2';
  public password = '1234';
  public showPassword = false;

  constructor() {
  }

  printHello() {

  }

  reset(): void {
    this.password = '';
  }

  testFunc () {

  }

  showPasswordClick(): void {
    this.showPassword = !this.showPassword;
  }

  checkInputValidate(): boolean {

    if (this.showPassword) {
      return true
    }

    return false;
  }

  checkLoginPassword() {

  }
}
