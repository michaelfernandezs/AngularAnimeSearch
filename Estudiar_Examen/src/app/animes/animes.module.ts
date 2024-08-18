import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CardAnimeComponent } from './components/card-anime/card-anime.component';
import { AnimesModuleRouting } from './animesRouting.module';
import { BuscarAnimeComponent } from './buscar-anime/buscar-anime.component';
import { FormsModule } from '@angular/forms';
import { VerAnimeComponent } from './ver-anime/ver-anime.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardAnimeComponent,
    BuscarAnimeComponent,
    VerAnimeComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    AnimesModuleRouting,
    FormsModule
  ],
  exports:[
    HomeComponent,
    CardAnimeComponent,
    BuscarAnimeComponent,
    VerAnimeComponent
  ]
})
export class AnimesModule { }
