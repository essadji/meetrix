
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { map, filter, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  string_api() {
    return this.http.get("http://essadji.be:1999/mongo/string", { responseType: 'text' })
  }
  local_api() {
    return this.http.get("http://localhost:2002/data/", { responseType: 'text' })
  }
  json_api() {
    return this.http.get("http://essadji.be:1999/mongo/json", { responseType: 'json' })
  }
}



