import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  styleUrl: './app.component.scss',
  template: `
    <div>
      
    </div>
  `,
})
export class AppComponent {
  title = 'practice';

  obs$ = new Observable(observer => {
    observer.next(44)
    observer.next(55)
    setTimeout(() => observer.next(33), 1000)
  }).subscribe({
    next: (data): void => {
      console.log(data)
    }
  })
}
