import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  public menuActive: boolean;
  
  toggleMenu(){
   this.menuActive = !this.menuActive;
  }
  
  closeMenu(){
    this.menuActive = false;
  }
  
}
