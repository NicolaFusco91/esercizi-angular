import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface Auth {
  token: string;
  username: string;
}

@Injectable()
export class AuthService {
  username: string;

  constructor(private http: HttpClient) {}

  /**
   *
   * @returns {Observable<Auth>}
   */
  login(u: string, p: string) {

    const params = new HttpParams()
      .set('user', u)
      .set('pass', p);
    return this.http.get<Auth>(`http://localhost:3000/login`, { params })
  }
}
