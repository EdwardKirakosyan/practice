import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./demo/demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  template: `

  `,
  imports: [CommonModule, FormsModule, DemoComponent]
})
export class AppComponent {

}