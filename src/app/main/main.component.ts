import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  unit: 'шт' | 'кг' | 'литр';
  made?: string;
  category?: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() name: string = '';
  @Output() onClicked = new EventEmitter<number>();

  public products: ProductModel[] = [
    { id: 1, name: 'Яблоко', description: 'Себи шахристон', price: 4, unit: 'кг' },
    { id: 2, name: 'RC', description: 'Истарвшан 1 литра', price: 10, unit: 'литр' },
    { id: 3, name: 'Каду', description: 'Гончи', price: 3.5, unit: 'кг' },
    { id: 4, name: 'Нон', description: 'Нони лермонтов', price: 20, unit: 'шт' },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClick(count: number): void {
    this.onClicked.emit(count)
  }

  getProducts(): void {
    // code for loading products
  }
}
