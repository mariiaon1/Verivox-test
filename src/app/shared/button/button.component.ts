import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() buttonClass: string;
  @Input() arrowClass: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
