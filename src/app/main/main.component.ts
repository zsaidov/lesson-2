import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() name: string = '';
  @Output() onClicked = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClick(count: number): void {
    this.onClicked.emit(count)
  }
}
