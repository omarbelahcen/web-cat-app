import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {
  
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();
  
  ngOnInit(): void {}

  onSearch(input: any) {
    this.productEventEmitter.emit({type: ProductActionsTypes.SEARCH_PRODUCT, payload: input});
  }
  
  onAddNewProduct() {
    this.productEventEmitter.emit({type: ProductActionsTypes.NEW_PRODUCT});
  }

  onGetAvailableProduct() {
    this.productEventEmitter.emit({type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS});

  }

  onGetSelectedProduct() {
    this.productEventEmitter.emit({type: ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAllProduct() {
    this.productEventEmitter.emit({type: ProductActionsTypes.GET_ALL_PRODUCTS});
  }

}
