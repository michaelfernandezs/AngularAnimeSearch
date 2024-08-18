import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAnimeComponent } from './buscar-anime/buscar-anime.component';
import { HomeComponent } from './home/home.component';
import { VerAnimeComponent } from './ver-anime/ver-anime.component';

const routes: Routes=[
  {
  path: 'home',
  component: HomeComponent,
  },
  {
    path: 'buscar',
    component: BuscarAnimeComponent,
    },
    
  {
    path: 'anime/:id',
    component: VerAnimeComponent,
    },
    

  {
    path:'**',
    redirectTo:'home'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AnimesModuleRouting { }
