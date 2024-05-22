import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  open_popup = false;
  hide_btn = true;

  constructor(private router: Router,) {
  }

  togglepopup() {
    // this.open_popup = true;
    // this.hide_btn = false;
    // await new Promise(resolve => setTimeout(resolve, 2000));
    this.router.navigate(['/Portfolio']);
  }
}
