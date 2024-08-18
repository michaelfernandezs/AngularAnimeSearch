import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaAnime: any[] = [];

  constructor(
    private animeS:AnimesService
  ) { }

  ngOnInit(): void {
    this.animeS.getAnimes().subscribe( 
      (animes: any)=> {
        this.listaAnime =animes.data;
        console.log(animes);
      }
    )
  }

}
