import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, 
    private productService: ProductsService,
    private router: Router) {

  }
  
  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    })
  }

  onSaveProduct() {
    this.productService.saveProduct(this.productFormGroup.value).subscribe(
      data => {
        alert("The product has been added successfully!" + this.productFormGroup.value);
        this.router.navigateByUrl("/products");
      }
    )
  }



}
