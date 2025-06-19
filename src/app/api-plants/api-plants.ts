import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-plants',
  imports: [],
  templateUrl: './api-plants.html',
  styleUrl: './api-plants.css'
})


export class ApiPlants {

  
   private apiURL = 'https://weather-api-h0fdwt.5sc6y6-4.usa-e2.cloudhub.io/forecast'

  forecastList: {
    date:string;
    description:string;
    tempMax:number;
    tempMin:number;
    logo:string;
  }[] = [];

  // j'install le téléphone chez moi
  constructor(private http:HttpClient){}



  // fonction appel vers API
  getForecastData(){
    this.http.get(this.apiURL).subscribe({
      next:(data:any) =>{

        console.log(data);

        this.forecastList = data["data"].map((day:any) => ({
          date: day["datetime"],
          description: day["weather"]["description"],
          tempMin: day["app_min_temp"],
          tempMax: day["app_max_temp"],
          logo: day["weather"]["icon"]
        }));
      }
    })
  
    }

  // Lancer la function dans j'ouvre le composant
  ngOnInit(){
    this.getForecastData();
  }

}



