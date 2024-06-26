import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DefirenceComponent } from './defirence/defirence.component';
import { TestimonialsSliderComponent } from './testimonials-slider/testimonials-slider.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DefirenceComponent, TestimonialsSliderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'manage-landing-page';
}
