import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  
  @Input() product: Product|null = null;
  @Output() productsItemEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();
  
  onEditProduct(product: Product) {
    this.productsItemEventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCT, payload: product})
  }

  onDeleteProduct(id: number) {
    this.productsItemEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: id})
  }

  onSelect(product: Product) {
    this.productsItemEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product})
  }

}
