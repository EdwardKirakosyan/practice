import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { Task } from "../Task";
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './demo.component.scss',
  template: `
    <div>
      <form #task="ngForm" (ngSubmit)="onSubmit(task)">
        <div>
          <label for="title">title</label>
          <input id="title" type="text" name="title" ngModel>
        </div>
        <br>
        <div>
          <label for="car">car</label>
          <input id="car" type="text" name="car" ngModel>
        </div>
        <br>
        <div>
          <label for="voch">voch</label>
          <input id="voch" type="text" name="voch" ngModel>
        </div>
        <br>
        <button type="submit">button</button>
      </form>  
    </div>
  `
})
export class DemoComponent {
  @Output()
  emitTask: EventEmitter<Task> = new EventEmitter<Task>()

  onSubmit(form: NgForm) {
    this.emitTask.emit(form.value)
    console.log(form.value)
  }

}
