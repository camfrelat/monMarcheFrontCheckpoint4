import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../shared/models/Vegetable.model';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css'],
})
export class VegetableListComponent implements OnInit {
  vegies: Vegetable[];

  constructor() {
    this.vegies = [];
  }

  ngOnInit(): void {}
}
