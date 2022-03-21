import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
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
  shoppingLists: ShopList[];
  selectedvegie!: number;

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private shopListService: ShoppingListService,
    private vegetableService: VegetableService
  ) {
    this.vegies = [];
    this.shoppingLists = [];

    this.listForm = this.fb.group({
      name: ['', Validators.required],
      vegetables: [[]],
    });
  }

  ngOnInit(): void {
    this.setTitle('Mon marché - Mes listes');

    // Load all vegies from DB
    this.vegetableService.getAllVegies().subscribe((vegetables) => {
      this.vegies = vegetables;
    });

    // Load all shopping lists
    this.loadLists();
  }

  // Add new shopping list with title
  addList() {
    this.shopListService.createList(this.listForm.value).subscribe();
    this.loadLists();
  }

  addVegieOnSelect(id: number, event: MatSelect) {
    const currentList = this.getListById(id);
    if (!currentList) {
      return;
    }
    const vegie = this.vegies.find((element) => element.id === event.value);
    if (!vegie) {
      return;
    }
    currentList.vegetables.push(vegie);

    this.shopListService.updateList(id, currentList).subscribe((list) => {
      //replace list in array
      const index = this.shoppingLists.findIndex(
        (element) => element.id === id
      );
      this.shoppingLists[index] = list;
    });
  }

  //delete vegetable
  deleteVegie(id: number, vegieId: number) {
    const currentList = this.getListById(id);
    if (!currentList) {
      return;
    }
    //erase vegies from array
    currentList.vegetables = currentList.vegetables.filter(
      (element) => element.id !== vegieId
    );
    this.shopListService.updateList(id, currentList).subscribe((list) => {
      //replace list in array
      const index = this.shoppingLists.findIndex(
        (element) => element.id === id
      );
      this.shoppingLists[index] = list;
    });
  }

  deleteList(id: number) {
    this.shopListService.deleteList(id).subscribe();

    //delete element from front
    const index = this.shoppingLists.findIndex((element) => element.id === id);
    this.shoppingLists.splice(index, 1);
  }

  getListById(id: number) {
    return this.shoppingLists.find((element) => element.id === id);
  }

  // Load all shopping lists
  loadLists() {
    this.shopListService.getAllLists().subscribe((shopLists) => {
      this.shoppingLists = shopLists;
    });
  }

  // Set page title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
