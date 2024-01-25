import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./demo/demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DemoComponent],
  styleUrl: './app.component.scss',
  template: `
    <div>

    </div>
  `,
})
export class AppComponent {

}