import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit  {
  public title = 'lesson-2';
  public name = '';
  public productCount = 0;

  constructor() {
  }

  changeProductCount(count: number): void {
    this.productCount += count;
    this.title = 'lesson 1';
  }

  ngOnInit(): void {
    console.log('ngOnInit work!');
    // code load products
  }

  ngAfterContentInit(): void {
    console.log('content inited!');
  }

  ngAfterViewInit(): void {
    console.log('view inited!');
  }
}
