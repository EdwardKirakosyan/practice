import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./demo/demo.component";
import { Task } from "./task";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DemoComponent],
  styleUrl: './app.component.scss',
  template: `
    <div>
      <app-demo (emitTask)="createTask($event)"></app-demo>
    </div>
  `,
})
export class AppComponent {
  createTask(data: Task) {
    console.log(data)
  }
}