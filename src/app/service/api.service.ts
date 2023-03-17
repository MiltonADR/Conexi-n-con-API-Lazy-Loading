import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  ApiPersonajes = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<any> {
    return this.http.get(this.ApiPersonajes);
  }

  getPersonaje(): Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/character/1`);
  }
}
