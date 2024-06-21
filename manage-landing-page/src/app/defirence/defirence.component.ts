import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-difference',
  standalone: true,
  imports: [],
  templateUrl: './defirence.component.html',
  styles: ``
})
export class DefirenceComponent {
  @Input("Index") index: string = "";
  @Input("Title") title: string = "";
  @Input("Description") description: string = "";
}
