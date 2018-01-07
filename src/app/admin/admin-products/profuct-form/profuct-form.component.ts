import { CategoryService } from './../../../service/category/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-profuct-form',
  templateUrl: './profuct-form.component.html',
  styleUrls: ['./profuct-form.component.css']
})
export class ProfuctFormComponent implements OnInit {

  categories$;
  product = {};

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = categoryService.getCategories();
    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.productService.get(id).take(1).subscribe(p => this.product = p);
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
