import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
  @Input("Img") img: string = "ali";
  @Input("Name") name: string = "Ali Bravo";
  @Input("Testimonial") testimonial: string = '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross - channel confusion and everyone is much more focused.”';
}
