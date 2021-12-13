import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
 isOpen: boolean;
  constructor() { this.isOpen = false; }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
