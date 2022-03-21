import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.setTitle('Mon marché - Acceuil');
  }

  // Set page title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
