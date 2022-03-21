import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Vegetable } from '../shared/models/Vegetable.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  vegies: Vegetable[];

  constructor(private titleService: Title) {
    this.vegies = [];
  }

  ngOnInit(): void {
    this.setTitle('Mon marché - Mes listes');
  }

  // Set page title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
