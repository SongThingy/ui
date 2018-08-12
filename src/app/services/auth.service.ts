import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}


  public authWithSpotify() {
    return this.http.get(`${environment.apiUrl}/auth/spotify`).toPromise();
  }
}
