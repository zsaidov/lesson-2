import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  public condition = true;
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
  testFunc() {

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
  ngOnInit(): void {
  }

  toggle() {
    this.condition = !this.condition;
  }

}
