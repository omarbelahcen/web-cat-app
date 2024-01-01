import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { ProductsService } from 'src/app/services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  searchForm: FormGroup = new FormGroup({});
  
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchInput: ['']
    })
  }

  constructor(private productService: ProductsService, 
    private formBuilder: FormBuilder,
    private router: Router) {

  }

  onSearch(searchForm: any) {
    this.products$ = this.productService.searchProducts(searchForm.keyword)
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError((err) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
    
  }

  onGetAllProduct() {
    this.products$ = this.productService.getProducts()
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError((err) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
  }

  onGetSelectedProduct() {
    this.products$ = this.productService.getSelectedProducts()
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError((err) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
  }

  onGetAvailableProduct() {
    this.products$ = this.productService.getAvailableProducts()
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError((err) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
  }

  onDeleteProduct(id: number) {
    let confirm = window.confirm("Are you sure?")
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(data => {
        this.onGetAllProduct();
    })
    }
    
  }

  onSelect(product: Product) {

    this.productService.selectProduct(product).subscribe(data => {
      product.selected = data.selected;
    })

  }

  onAddNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }

}
