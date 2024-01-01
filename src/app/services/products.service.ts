import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    let apiUrl = environment.apiUrl + "/products"
    return this.http.get<Product[]>(apiUrl);
  }

  getSelectedProducts(): Observable<Product[]> {
    let apiUrl = environment.apiUrl + "/products?selected=true"
    return this.http.get<Product[]>(apiUrl);
  }

  getAvailableProducts(): Observable<Product[]> {
    let apiUrl = environment.apiUrl + "/products?available=true"
    return this.http.get<Product[]>(apiUrl);
  }

  searchProducts(keyword: string): Observable<Product[]> {
    let apiUrl = environment.apiUrl + "/products?name_like="+ keyword;
    return this.http.get<Product[]>(apiUrl);
  }

  deleteProduct(id: number): Observable<void> {
    let apiUrl = environment.apiUrl + "/products/"+ id;
    return this.http.delete<void>(apiUrl);
  }

  selectProduct(product: Product): Observable<Product> {
    let apiUrl = environment.apiUrl + "/products/"+ product.id;
    product.selected = !product.selected;
    return this.http.put<Product>(apiUrl, product);
  }

   



}
