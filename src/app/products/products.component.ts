import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../service/shopping-cart/shopping-cart.service';
import { Product } from './../service/product/domain/product';
import { ProductService } from './../service/product/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart: any;
  subscription: Subscription;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService) {

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

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart())
      .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}