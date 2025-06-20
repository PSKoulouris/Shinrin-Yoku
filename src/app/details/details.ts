import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadPlantData();
    });
  }

  loadPlantData() {
    this.http.get(this.apiURL).subscribe((data: any) => {
      this.plantData = data.data.find((p: any) => p.id === this.id);
    });
  }
}

