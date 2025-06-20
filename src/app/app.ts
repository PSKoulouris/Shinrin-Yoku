import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiPlants } from './api-plants/api-plants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Shinrin-yoku';
}
