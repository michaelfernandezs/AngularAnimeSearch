import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(
    private http:HttpClient
  ) { }
  getAnimes(){
    return this.http.get('https://api.jikan.moe/v4/top/anime');
  }
  getAnime(id:any){
    return this.http.get('https://api.jikan.moe/v4/anime/'+ id +'/full');
  }

  buscarAnime(anime:string){
    return this.http.get(`https://api.jikan.moe/v4/anime?q=${anime}`);
  }


}
