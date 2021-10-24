import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sports } from '../model/sports';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
 // private _sports:Sports[]
// private _sports:Sports[]=[
//   new Sports('Cricketer',101,'England',''),
//   new Sports('FootBall',102,'England',''),
//   new Sports('Tennis',103,'England','')
// ]
  
  _baseurl:string='http://localhost:8080/ics-league-api';

  constructor(private _http:HttpClient) { }

  getAllSports = ():Observable<Sports[]>=>{
    let url = this._baseurl+"/sports"
    return this._http.get<Sports[]>(url);
  }
}
