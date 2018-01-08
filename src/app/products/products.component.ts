import { Product } from './../service/product/domain/product';
import { ProductService } from './../service/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  category: string;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {

    this.productService.getAll()
      .switchMap(product => {
        this.products = product;
        return route.queryParamMap
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });
  }
}
