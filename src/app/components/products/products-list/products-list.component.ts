import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventType } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Input() productsInput$: Observable<AppDataState<Product[]>> | null = null;
  @Output() productsEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();
  
  readonly DataStateEnum = DataStateEnum;

  onActionEvent($event: ActionEvent) {
    this.productsEventEmitter.emit($event);
  }


  onSelect(product: Product) {
    this.productsEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product})
  }

  onDeleteProduct(id: number) {
    this.productsEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: id})
  }

  onEditProduct(product: Product) {
    this.productsEventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCT, payload: product})
  }

}
