import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subject } from "rxjs";

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

}
