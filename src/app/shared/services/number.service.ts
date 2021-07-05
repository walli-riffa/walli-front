import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Numbers} from '../models/numbers';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  api: string = environment.WALLI_API + 'numbers/';

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<Numbers[]> {
    return this.http.get<Numbers[]>(this.api);
  }
}
