import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss']
})
export class CardAnimeComponent implements OnInit {
  @Input()misAnimes: any[]=[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verMas(id:any){
    console.log(id);
    this.router.navigate(['./anime', id]);
  }

}
