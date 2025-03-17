import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artisan-card',
  templateUrl: './artisan-card.component.html',
  styleUrls: ['./artisan-card.component.css']
})
export class ArtisanCardComponent {
  @Input() artisan: any; // Permet de passer un artisan en Input
}
