import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {NgClass, NgForOf} from '@angular/common';
import "tw-elements";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgForOf, NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSlideIndex: number = 0;

  slides = [
    'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
  ];

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
