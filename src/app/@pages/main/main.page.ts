import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListsPage } from "./lists/lists.page";
import { IONIC_EXPORTS } from '@core/utils/exports/ionic.export';
import { ANGULAR_EXPORTS } from '@core/utils/exports/angular.export';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [
    ...IONIC_EXPORTS,
    ...ANGULAR_EXPORTS,
    ListsPage
  ]
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() { }

}
