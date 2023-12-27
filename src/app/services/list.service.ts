import { Injectable } from '@angular/core';
import { Produtos } from '../Intefaces/Produtos';
import { Animal } from '../Intefaces/Animais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  constructor(private http: HttpClient) { }

  remove(products: Produtos[], product: Produtos) {
    return products.filter((item) => product.name !== item.name);
  }
  removeAnimal(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
