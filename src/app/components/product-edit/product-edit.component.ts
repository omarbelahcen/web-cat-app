import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId: number;
  productFormGroup?: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService : ProductsService, private fb: FormBuilder) {
      this.productId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(
      data => this.productFormGroup = this.fb.group({        
        name: [data.name, Validators.required],
        price: [data.price, Validators.required],
        quantity: [data.quantity, Validators.required],
        selected: [data.selected, Validators.required],
        available: [data.available, Validators.required]
      })
    );
  }
  
  onUpdateProduct() {
    let currentProduct = this.productFormGroup?.value;
    currentProduct.id = this.productId;
    this.productService.updateProduct(this.productFormGroup?.value).subscribe(
      data => this.router.navigateByUrl("/products")
    );
  }





}
