import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class Details {

  id: number = 0;
  plantData: any;
  private apiURL = 'data/data_details.json';

  constructor(private route: ActivatedRoute, private http: HttpClient,  private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadPlantData();
    });
  }

  loadPlantData() {
    this.http.get(this.apiURL).subscribe((data: any) => {
      const plant = data.data.find((p: any) => p.id === this.id);
      if (plant && plant.common_name) {
        plant.common_name = this.capitalizeFirstLetter(plant.common_name);
      }
      this.plantData = plant;
    });
  }

  private capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  //Return button from detail to previous page:
  goBack(): void {
    this.location.back();
}

}