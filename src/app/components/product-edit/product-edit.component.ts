import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  ngOnInit(): void {

  }

  productFormGroup: FormGroup = new FormGroup({});

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService : ProductsService, 
    private fb: FormBuilder) {
  }

  onSaveProduct() {}





}
