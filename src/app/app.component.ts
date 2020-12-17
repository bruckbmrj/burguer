import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'burguer';

  constructor(private router: Router) { }

  getMenuTransparent(){
    if (this.router.url === '/'){
      //console.log('estou na home');
      return "bg-transparent";
  }
  return "";
 }

}
