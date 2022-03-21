import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../shared/models/Vegetable.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  vegies: Vegetable[];

  constructor() {
    this.vegies = [];
  }

  ngOnInit(): void {}
}
