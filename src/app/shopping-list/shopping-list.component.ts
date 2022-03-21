import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ShopList } from '../shared/models/ShopList.model';
import { Vegetable } from '../shared/models/Vegetable.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { VegetableService } from '../shared/services/vegetable.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  listForm: FormGroup;
  vegies: Vegetable[];
  shoppingList: ShopList[];

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private shopListService: ShoppingListService,
    private vegetableService: VegetableService
  ) {
    this.vegies = [];
    this.shoppingList = [];

    this.listForm = this.fb.group({
      name: [''],
      vegetables: [''],
    });
  }

  ngOnInit(): void {
    this.setTitle('Mon marché - Mes listes');

    // Load all vegies from DB
    this.vegetableService.getAllVegies().subscribe((vegetables) => {
      this.vegies = vegetables;
    });

    // Load all shopping lists
    this.shopListService.getAllLists().subscribe((shopLists) => {
      this.shoppingList = shopLists;
    });
  }

  // Add new shopping list with title
  addList() {
    this.shopListService.createList(this.listForm.value).subscribe();
  }

  // Set page title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
