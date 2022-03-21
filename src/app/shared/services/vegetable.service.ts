import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vegetable } from '../models/Vegetable.model';

@Injectable({
  providedIn: 'root',
})
export class VegetableService {
  urlBack = environment.urlBack;

  constructor(private http: HttpClient) {}

  // Get all vegetables
  public getAllVegies(): Observable<Vegetable[]> {
    return this.http.get<Vegetable[]>(this.urlBack + 'vegetables/');
  }

  // Get by id
  public GetById(id: number): Observable<Vegetable> {
    return this.http.get<Vegetable>(this.http + 'vegetables/' + id);
  }
}
