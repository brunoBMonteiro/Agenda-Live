import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';  //api url

  httpOptions = {  //ultilizar quando for fazer requisição via post
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient //varialvel para iniciar o http cliente
  ) { }

    public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
      return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
    }
}
