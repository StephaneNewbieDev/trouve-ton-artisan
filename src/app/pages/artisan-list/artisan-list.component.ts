import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../artisan.service';

@Component({
  selector: 'app-artisan-list',
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.css']
})
export class ArtisanListComponent implements OnInit {
  artisans: any[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data;
    });
  }
}
