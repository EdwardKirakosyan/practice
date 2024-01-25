import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./demo/demo.component";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Task } from "./Task";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DemoComponent, HttpClientModule],
  styleUrl: './app.component.scss',
  template: `
    <div>
      <app-demo (emitTask)="createTask($event)"></app-demo>
    </div>
  `,
})
export class AppComponent {
  http: HttpClient = inject(HttpClient)

  createTask(data: Task) {
    const headers = new HttpHeaders({ 'header': 'ssss' })
    this.http.post<{ name: string }>('https://angu-8612c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', data, {
      headers: headers
    })
      .subscribe((res) => {
        console.log(res)
      })
  }
}