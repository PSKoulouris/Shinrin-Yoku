import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterLink} from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-plants',
  imports: [],
  templateUrl: './api-plants.html',
  styleUrl: './api-plants.css'
})


export class ApiPlants {

  
   private apiURL = 'data/data_details.json'

  plantsList: {
   id: number,
   image: string,
   common_name: string
  }[] = [];

  //id for the detail page:
    ids: number[] = [];

  // j'install le téléphone chez moi
  constructor(private http:HttpClient, private router: Router){}



  // fonction appel vers API
  getPlantsData(){
    this.http.get(this.apiURL).subscribe({
      next:(data:any) =>{

        console.log(data);

        this.plantsList = data["data"].map((plant:any) => ({
           id: plant.id,
          image: plant.default_image?.small_url,
          common_name: plant.common_name
        }));
      }
    })
}

 //Click button read more to open the detail page for each plant:
     goToDetails(id: number) {
    this.router.navigate(['/detail', id]);
  }

  // Lancer la function dans j'ouvre le composant
  ngOnInit(){
    this.getPlantsData();

  }

}


