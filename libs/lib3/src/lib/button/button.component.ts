import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tailwin-nx2-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() href?: string;
}
