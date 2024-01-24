import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./demo/demo.component";
import { SerService } from "./ser.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DemoComponent],
  styleUrl: './app.component.scss',
  template: `
    <div>
      <app-demo (clickC)="gFn($event)"></app-demo>
      <p>{{ c }}</p>
    </div>
  `,
})
export class AppComponent {
  c = ''

  gFn(val: string) {
    this.c = val
  }
}