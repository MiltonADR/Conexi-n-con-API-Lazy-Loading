import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  personajesData = [];
  titulo: string = 'location';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getPersonajes().subscribe((data) => {
      this.personajesData = data.results;
      console.log(data.results);
    });
  }
}
