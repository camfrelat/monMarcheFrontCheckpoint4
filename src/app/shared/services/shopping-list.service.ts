import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShopList } from '../models/ShopList.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  urlBack = environment.urlBack;

  constructor(private http: HttpClient) {}

  // Get all vegetables
  public getAllLists(): Observable<ShopList[]> {
    return this.http.get<ShopList[]>(this.urlBack + 'lists/');
  }

  // Create shoppingList
  public createList(shoppingList: ShopList): Observable<ShopList> {
    return this.http.post<ShopList>(this.urlBack + 'lists/', shoppingList);
  }

  // Update shoppingList
  public updateList(id: number, shoppingList: ShopList): Observable<ShopList> {
    return this.http.put<ShopList>(this.urlBack + 'lists/' + id, shoppingList);
  }

  // Delete shoppingList
  public deleteList(id: number) {
    return this.http.delete(this.urlBack + 'lists/' + id);
  }
}
