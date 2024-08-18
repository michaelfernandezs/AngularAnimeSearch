import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-ver-anime',
  templateUrl: './ver-anime.component.html',
  styleUrls: ['./ver-anime.component.scss']
})
export class VerAnimeComponent implements OnInit {
  miAnime:any = {};

  constructor(
    private ar:ActivatedRoute,
    private animeS: AnimesService
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      (params:any)=>{
        console.log( params.id);
        this.animeS.getAnime(params.id).subscribe(
          (anime:any)=>{
            console.log(anime);
            this.miAnime = anime
          } 
        )
      }
    )
  }


}
