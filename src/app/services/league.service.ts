import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from '../model/league';


@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  _baseurl:string='';

  constructor(private _http:HttpClient) { }

  getAllLeague():Observable<League[]>{
    let url = this._baseurl+" "
    return this._http.get<League[]>(url);
  }


  
  // getAllTeams():Observable<Teams[]>{
  //   let url=this._baseurl+" "
  //   return this._http.get<Teams>(url);
  // }
  // getPlayerByTeam():Observable<Player[]>{
  //   let url=this._baseurl+" "
  //   return this._http.get<Player>(url);
  // }


}
