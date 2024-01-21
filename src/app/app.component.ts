import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DemoComponent, ReactiveFormsModule],
  styleUrl: './app.component.scss',
  template: `
    <div>
      
    </div>
  `,
})
export class AppComponent {

}
