import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Title } from '@angular/platform-browser';
import { Vegetable } from '../shared/models/Vegetable.model';
import { VegetableService } from '../shared/services/vegetable.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  vegies: Vegetable[];
  randomVegie!: Vegetable;
  showRandomVegie = false;
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  diameter: number = 35;
  showSpinner = false;

  constructor(
    private titleService: Title,
    private vegetableService: VegetableService
  ) {
    this.vegies = [];
  }

  ngOnInit(): void {
    this.setTitle('Mon marché - Acceuil');
  }

  getRandomVegie(): Vegetable {
    (async () => {
      this.showRandomVegie = false;
      this.showSpinner = true;

      //get random vegie
      this.vegetableService.getAllVegies().subscribe((vegetables) => {
        this.vegies = vegetables;
      });

      // wait to get response before showing div and results
      await this.delay(1000);
      this.randomVegie =
        this.vegies[Math.floor(Math.random() * this.vegies.length)];
      this.showSpinner = false;
      this.showRandomVegie = true;
    })();
    return this.randomVegie;
  }

  // Set page title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  // Set delay
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
