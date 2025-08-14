import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-viewall',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.scss'],
})
export class ViewallComponent implements OnInit {
  viewalldata: any;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    console.log('Loading products...');
    this.getproductviewlist();
  }

  getproductviewlist() {
    this.service.GetProductList('2', 'Wellness Care').subscribe({
      next: (res) => {
        this.viewalldata = res;
      },
      error: (err) => {
        console.error('Error fetching product list', err);
      },
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductService } from '../services/product.service';
// import { Router } from 'express';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-viewall',
//   standalone: true,
//   imports: [CommonModule , RouterModule],
//   templateUrl: './viewall.component.html',
//   styleUrls: ['./viewall.component.scss']
// })
// export class ViewallComponent implements OnInit {
//    constructor(private service:ProductService,private router: Router) { }
//   productsdata:any;
//   ngOnInit(): void {
//     console.log("get products....");
//     this.getproductList();
//   }
//    getproductList(){
//     this.service.GetProductList('1', 'Wellness Care').subscribe(
//       data => {
//         console.log('Product List:', data);
//         this.productsdata = data;  // assuming data is an array of products
//       },
//       error => {
//         console.error('Error fetching product list', error);
//       }
//     );
//   // productsdata: any[] = [];
//   // categories: any[] = [];
//   // products: any[] = [];
//   // priceRanges: any[] = [];
//   // topCategories: any[] = [];
//   // featuredProducts: any[] = [];
//   // client: any[] = [];
//   // constructor(private productService: ProductService) {}

//   // ngOnInit(): void {
//   //   this.fetchProductList();
//   // }

//   // fetchProductList(): void {
//   //   this.productService.GetViewAllProducts('All', '0', 'Wellness Care')
//   //     .subscribe({
//   //       next: (data: any) => {
//   //         console.log('view all data:', data);
//   //         this.categories = data.Categories;
//   //         this.products = data.products;
//   //         this.priceRanges = data.priceRanges;
//   //         this.topCategories = data.topCategories;
//   //         this.featuredProducts = data.FeaturedProducts;
//   //         this.client = data.Client;
//   //       },
//   //       error: (err) => {
//   //         console.error('Error fetching View All products:', err);
//   //       }
//   //     });
//   // }
// }
// }
