import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-testimonials-slider',
  standalone: true,
  imports: [TestimonialComponent],
  templateUrl: './testimonials-slider.component.html',
  styles: []
})
export class TestimonialsSliderComponent implements AfterViewInit {

  constructor() {

  }

  ngAfterViewInit(): void {
    new Splide('.splide', {
      type: 'loop',
      arrows: false,
      focus: 'center',
      perPage: 1,
    }).mount();
  }
}
