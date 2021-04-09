import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data: number = 0;

  onClick(d: string) {
    
    this.data = Number(d); //parseInt() or +
  }
}
