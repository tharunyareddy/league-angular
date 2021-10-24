import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _baseurl:string = "";
  constructor(private _http:HttpClient) { }

    getPlayerByTeam():Observable<Player[]>{
    let url=this._baseurl+" "
    return this._http.get<Player[]>(url);
  }
}
