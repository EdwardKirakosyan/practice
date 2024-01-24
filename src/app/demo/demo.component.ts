import {
  Component,
  EventEmitter,
  Input,
  Output,
  input
} from '@angular/core';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './demo.component.scss',
  template: `
    <div>
      <button (click)="fns()"></button>
    </div>
  `
})
export class DemoComponent {
  @Output() clickC = new EventEmitter()

  fns() {
    this.clickC.emit('vvv')
  }
}
