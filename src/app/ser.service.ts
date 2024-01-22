import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {
  fn() {
    return Math.random() * 10
  }
}
