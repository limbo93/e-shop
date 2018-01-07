import { CategoryService } from './../../../service/category/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product/product.service';

@Component({
  selector: 'app-profuct-form',
  templateUrl: './profuct-form.component.html',
  styleUrls: ['./profuct-form.component.css']
})
export class ProfuctFormComponent implements OnInit {

  categories$;
  
  constructor(categoryService:CategoryService, private productService:ProductService) {
    this.categories$=categoryService.getCategories();
  }

  save(product){
    this.productService.create(product);
  }

  ngOnInit() {
  }

}
