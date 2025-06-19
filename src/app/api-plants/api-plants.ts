import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-plants',
  imports: [],
  templateUrl: './api-plants.html',
  styleUrl: './api-plants.css'
})


export class ApiPlants {

  
   private apiURL = 'data/plantsSummary.json'

  plantsList: {
   id: number,
   image: string
  }[] = [];

  // j'install le téléphone chez moi
  constructor(private http:HttpClient){}



  // fonction appel vers API
  getPlantsData(){
    this.http.get(this.apiURL).subscribe({
      next:(data:any) =>{

        console.log(data);

        this.plantsList = data["data"].map((plant:any) => ({
           id: plant.id,
          image: plant.default_image?.small_url
        }));
      }
    })
  
    }

  // Lancer la function dans j'ouvre le composant
  ngOnInit(){
    this.getPlantsData();
  }

}



