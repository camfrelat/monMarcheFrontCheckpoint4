import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VegetableService } from '../shared/services/vegetable.service';
import { Vegetable } from '../shared/models/Vegetable.model';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css'],
})
export class VegetableListComponent implements OnInit {
  vegies: Vegetable[];

  constructor(
    private titleService: Title,
    private vegetableService: VegetableService
  ) {
    this.vegies = [];
  }

  ngOnInit(): void {
    this.setTitle(' Mon marché - Tous les légumes');

    this.vegetableService.getAllVegies().subscribe((vegetables) => {
      this.vegies = vegetables;
    });
  }

  // Set page title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
