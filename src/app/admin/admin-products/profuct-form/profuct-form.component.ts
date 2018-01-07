import { CategoryService } from './../../../service/category/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profuct-form',
  templateUrl: './profuct-form.component.html',
  styleUrls: ['./profuct-form.component.css']
})
export class ProfuctFormComponent implements OnInit {

  categories$;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) {
    this.categories$ = categoryService.getCategories();
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
