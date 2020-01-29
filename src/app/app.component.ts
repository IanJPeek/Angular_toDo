import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Schnuckums';


  constructor(){
    this.name = "bob"
  }

  changeName(name:string):void {
    this.name = name
  }
}
