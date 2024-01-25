import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./demo/demo.component";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Task } from "./Task";
import { map } from "rxjs";

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
export class AppComponent implements OnInit {
  http: HttpClient = inject(HttpClient)

  ngOnInit(): void {
    this.fetchAll()
  }

  createTask(data: Task) {
    const headers = new HttpHeaders({ 'header': 'ssss' })
    this.http.post<{ name: string }>('https://angu-8612c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', data, { headers: headers })
      .subscribe((res) => {
        console.log(res)
      })
  }

  private fetchAll() {
    this.http.get<{ [key: string]: Task }>('https://angu-8612c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json')
      .pipe(map((res) => {
        let tasks = []
        for (let key in res) {
          if (res.hasOwnProperty(key)) {
            tasks.push({ ...res[key], id: key })
          }
        }
        return tasks
      }))
      .subscribe((tasks) => {
        console.log(tasks)
      })
  }
}