import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'lesson-2';
  public name = '';
  public productCount = 0;

  constructor() {
  }

  changeProductCount(count: number): void {
    this.productCount += count;
  }
}
