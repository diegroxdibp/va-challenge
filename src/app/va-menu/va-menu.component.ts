import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-va-menu',
  templateUrl: './va-menu.component.html',
  styleUrls: ['./va-menu.component.scss']
})
export class VaMenuComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit(): void {
  }

}
