import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthenticationRequest} from '../models/authentication-request.model';
import {AuthenticationResponse} from '../models/authentication-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.WALLI_API + 'api/auth';

  constructor(
    private http: HttpClient
  ) {
  }

  registerUser(autheticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiURL}/sign-up`, autheticationRequest);
  }

  refreshToken(): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiURL}/refresh-token`, null);
  }

  authenticateUser(autheticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiURL}`, autheticationRequest);
  }
}
