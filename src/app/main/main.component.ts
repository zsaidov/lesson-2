import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() name: string = '';
  @Output() onClicked = new EventEmitter<number>();

  public cards = [
    {
      id: 1,
      title: 'Test title',
      img: 'assets/images/health.png',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s\n content.'
    },
    {
      id: 2,
      title: 'Test title',
      img: 'assets/images/health.png',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s\n content.'
    },
    {
      id: 3,
      title: 'Test title',
      img: 'assets/images/health.png',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s\n content.'
    },
    {
      id: 4,
      title: 'Test title',
      img: 'assets/images/health.png',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s\n content.'
    },
    {
      id: 5,
      title: 'Test title',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s\n content.'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClick(count: number): void {
    this.onClicked.emit(count)
  }
}
