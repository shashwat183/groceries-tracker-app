import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Grocery } from '../../shared/models/grocery.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceriesApiService {

  constructor(private http: HttpClient) { }

  getGroceries(): Observable<Grocery[]>  {
    return this.http.get<Grocery[]>(`${environment.API_URL}/grocery`)
  }
}
