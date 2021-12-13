import { Component } from '@angular/core';
import { MenuService } from '../va-menu/menu.service';

@Component({
  selector: 'app-va-hamburguer-menu',
  templateUrl: './va-hamburguer-menu.component.html',
  styleUrls: ['./va-hamburguer-menu.component.scss']
})
export class VaHamburguerMenuComponent {

  constructor(public menu: MenuService) { }

  toggleMenu() {
    this.menu.toggleMenu();
  }
}
