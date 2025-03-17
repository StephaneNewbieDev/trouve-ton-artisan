import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtisanService {
  private dataUrl = 'assets/data/artisans.json'; // Vérifie que le chemin est correct

    constructor(private http: HttpClient) {}

  getArtisans(): Observable<any[]> {  // Assure-toi que cette méthode existe
        return this.http.get<any[]>(this.dataUrl);
    }
}
