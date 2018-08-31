import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  public menuActive: boolean;
  
  toggleMenu(){
    if(!this.menuActive){
      this.menuActive = true
    }
    else{
      this.menuActive = false;
    }
  }
  
  closeMenu(){
    this.menuActive = false;
  }
  
}
