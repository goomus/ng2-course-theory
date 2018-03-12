import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: "car.component.html",
  styles: [`
  h2 {
  }  
    `]
})
export class CarComponent {
carName: string = 'Ford';
carYear = 2017;

getName(){
  return this.carName;
}



}
