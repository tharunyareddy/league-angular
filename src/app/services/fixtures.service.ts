import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fixtures } from '../model/fixtures';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  private _baseurl:string=""

  constructor(private _http:HttpClient) { }

  getAllFixtures():Observable<Fixtures[]>{
    let url=this._baseurl+" ";
    return this._http.get<Fixtures[]>(url);
  }
}
