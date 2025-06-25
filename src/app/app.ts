import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ApiPlants } from './api-plants/api-plants';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // note: it's 'styleUrls', plural
})
export class App implements OnInit {
  protected title = 'Shinrin-yoku'; bbbb

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}


