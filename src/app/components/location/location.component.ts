import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  personajesData = [];
  titulo: string = 'principal';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getPersonajes().subscribe((data) => {
      this.personajesData = data.results;
      console.log(data.results);
    });
  }
}
