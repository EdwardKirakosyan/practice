import {
  Component,
  EventEmitter,
  Input,
  Output,
  input
} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { every } from "rxjs";
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './demo.component.scss',
  template: `
    <div>
      
    </div>
  `
})
export class DemoComponent {

}
