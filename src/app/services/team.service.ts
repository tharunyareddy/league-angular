import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../model/team';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _baseurl:string=""
  constructor(private _http:HttpClient) { }

  getAllTeams():Observable<Team[]>{
    let url=this._baseurl+" "
    return this._http.get<Team[]>(url);
  }
}
