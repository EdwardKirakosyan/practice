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
    <button (click)="onServ()">service</button>
    <button (click)="onInfo()">info</button>
    <button (click)="onPrivacy()">privacy</button>
    <button (click)="onUser()">user</button>
    <br>
    <div [ngSwitch]="tab">
      <h1 *ngSwitchCase="'service'">vvvvvv</h1>
      <h1 *ngSwitchCase="'info'">ssss</h1>
      <h1 *ngSwitchCase="'privacy'">aaaaa</h1>
      <h1 *ngSwitchCase="'user'">тттттт</h1>
    </div>
  </div>
  `,
})
export class AppComponent {
  tab = ''

  onServ() {
    this.tab = 'service'
  }

  onInfo() {
    this.tab = 'info'
  }

  onPrivacy() {
    this.tab = 'privacy'
  }

  onUser() {
    this.tab = 'user'
  }
}
