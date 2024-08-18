import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-buscar-anime',
  templateUrl: './buscar-anime.component.html',
  styleUrls: ['./buscar-anime.component.scss']
})
export class BuscarAnimeComponent implements OnInit {
  termino = 'Chainsaw Man '
  animes: any[] = [];
  constructor(
    private animeS:AnimesService
  ) { }

  ngOnInit(): void {
  }

  buscarAnime(){
    console.log(this.termino)
    this.animeS.buscarAnime(this.termino).subscribe(
      (anime:any) =>{
        this.animes = anime.data;
        console.log(anime);
      }
    )
  }

}
