import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab1Page {

  mostrarAM: boolean = false;
  mostrarFM: boolean = false;
  mostrarMundo: boolean  = false;

  constructor() {}
    am() {
      this.mostrarAM = true;
      this.mostrarFM = false;
      this.mostrarMundo = false;
    }

    fm() {
      this.mostrarAM = false;
      this.mostrarFM = true;
      this.mostrarMundo = false;
    }

    mundo() {
      this.mostrarAM = false;
      this.mostrarFM = false;
      this.mostrarMundo = true;
    }
  
}
