import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Ajout de Routes et RouterModule

// Import des composants
import { HomeComponent } from './pages/home/home.component';
import { ArtisanListComponent } from './pages/artisan-list/artisan-list.component';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisans', component: ArtisanListComponent },
  { path: 'artisans/:id', component: ArtisanDetailComponent },
  { path: '**', component: NotFoundComponent } // Pour gérer les routes inexistantes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
