import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { ANGULAR_EXPORTS } from '@core/utils/exports/angular.export';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
  standalone: true,
  imports: [IonContent, ...ANGULAR_EXPORTS]
})
export class ListsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
