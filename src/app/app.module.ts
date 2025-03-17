import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ArtisanCardComponent } from './components/artisan-card/artisan-card.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    
    imports: [
        BrowserModule,
        CommonModule,
        ArtisanCardComponent,
        RouterModule,
        AppRoutingModule
]
})
export class AppModule { }
