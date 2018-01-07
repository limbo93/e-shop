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
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure to delete this product?')) return;
      
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
