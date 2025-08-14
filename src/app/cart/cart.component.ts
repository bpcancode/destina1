import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  tempcartvalue: any;
  productsdata: any;

  constructor(private route: ActivatedRoute, private service: ProductService, private http: HttpClient) { }
  cartcode: string = '';
  cartItems: any = null;
  subtotal: number = 0;
  shipping: number = 10; // example flat shipping
  total: number = 0;
  totalCV: number = 0;
  sum: any;
  productList: any[] = [];

  paramcart: any = {
    pkid: 'MYAST001',
    pid: '0',
    uniqid: 'some-uniqid',
    sessid: 'some-session-id',
    ipAddress: '152.59.195.170',
    sprno: '0',
    quantity: 0,
    prdtype: 'Package'
  };

  ngOnInit(): void {


    this.paramcart.uniqid = localStorage.getItem('uniqid');
    this.paramcart.sessid = localStorage.getItem('sessid');


     this.cartcode = this.route.snapshot.paramMap.get('pkcode')!;
     console.log("Product pkcode----------:", this.cartcode);
     if (this.cartcode) {
      this.getproductcartinfo();
      } else {
      console.warn("No pkcode provided.");
      // Show a message or redirect if needed
      }
    this.getClientIP(); // sets ipAddress
    this.getproductList()
    //this.getproductdetailsinfo();
  }

  getClientIP() {
    this.http.get<{ ip: string }>('https://api.ipify.org?format=json').subscribe({
      next: (res) => {
        this.paramcart.ipAddress = res.ip;
        
      },
      error: () => {
        this.paramcart.ipAddress = '0.0.0.0'; // fallback
      }
    });
  }
   getproductList() {
    this.service.GetProductList('1', 'Wellness Care').subscribe(
      data => {

        console.log('Product List:', data);
        this.productsdata = data;  // assuming data is an array of products
        
      },

      error => {
        console.error('Error fetching product list', error);
      }
    );
  }
  increaseQty(product: any) {
    product.quantity = (product.quantity || 1) + 1;
  }

  decreaseQty(product: any) {
    if (!product.quantity) {
      product.quantity = 1;
    } else if (product.quantity > 1) {
      product.quantity--;
    }
  }
  addToCart(value: any) {

  }

  getproductcartinfo() {
    const payload = {
      Action: 'getNcartitems',
      Pkid: this.cartcode,
      Pid: this.paramcart.pid,
      Quantity: this.paramcart.quantity,
      Uniqid: this.paramcart.uniqid,
      Sessid: this.paramcart.sessid,
      IpAddress: this.paramcart.ipAddress,
      Sprno: this.paramcart.sprno,
      Prdtype: this.paramcart.prdtype

    };

    this.service.getcart(payload).subscribe({
      next: (response: any) => {
        console.log("cart payload-------------", payload);
        console.log('get cart data:', response);
        this.cartItems = response.cartItems || [];
        this.tempcartvalue=response.productList
        // this.cartCount = response.cartCountDetails?.openCartCount || 0;
        this.productList = response.productList || [];
        //this.shippingCharges = response.shipping?.shipChrgs || 0;
        this.cartItems = this.productList.map((prod: any) => ({
          image: prod.pimage,// ? `https://yourcdn.com/images/${prod.pimage}` : 'assets/images/placeholder.png',
          name: prod.pkname,
          code: prod.pkcode,
          price: parseFloat(prod.price),
          quantity: prod.qty,
          cv: prod.cv,
          inStock: true, // Assuming in stock; change if you have a flag
          amPerks: 5 // Example; replace with actual logic if available
        }));
console.log("this is testing data--------------", this.cartItems );
        this.updateTotal();
      },
      error: (err) => {
        console.error('Error to cart:', err);
      }
    })
    

  }
  updateTotal() {
    if (!this.cartItems || !Array.isArray(this.cartItems)) {
      this.cartItems = [];
    }
    this.subtotal = this.cartItems.reduce((sum: number, item: any) => {
      return sum + (item.price * item.quantity);
    }, 0);
    this.totalCV = this.cartItems.reduce((sum: number, item: any) => {
      return sum + (item.cv);
    }, 0);
    this.total = this.subtotal + this.shipping;
  }

  incrementQty(item: any) {
    item.quantity++;
    this.updateTotal();
  }

  decrementQty(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotal();
    }
  }
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
  
}
  // cartItems = [
  //     {
  //       name: 'D1 PHYTOMILK ASE DEEP MOISTURE BODY SHOWER CREAM',
  //       code: 'MYJD02',
  //       price: 19.0,
  //       quantity: 1,
  //       image: 'assets/images/2151.jpg',
  //       inStock: true,
  //       amPerks: 35
  //     }
  //   ];

  //   subtotal = 35.0;
  //   shipping = 9.95;
  //   selectedHandlingMethod = '';
  //   promotions = ['You qualified for the following promotion:', 'Be sure to select the catalog in your preferred language.'];
  //   recommendedProducts = [
  //     {
  //       name: 'SAPPHIRE COMBO 3',
  //       image: 'assets/images/14011.jpg',
  //       price: 1762.80,
  //       rating: 5,
  //       hearts: 90,
  //       reviews: 380
  //     },
  //     {
  //       name: 'JADE BIO MATRIX SHIELD',
  //       image: 'assets/images/13701.jpg',
  //       price: 169.90,
  //       rating: 5,
  //       hearts: 118,
  //       reviews: 2052
  //     },
  //     {
  //       name: 'SAPPHIRE BIO MATRIX',
  //       image: 'assets/images/14011.jpg',
  //       price: 1693.00,
  //       rating: 5,
  //       hearts: 1390,
  //       reviews: 3000
  //     },
  //     {
  //       name: 'JADE COFFEE',
  //       image: 'assets/images/20941.jpg',
  //       price: 81.40,
  //       rating: 5,
  //       hearts: 86,
  //       reviews: 504
  //     }
  //   ];

  //   get total() {
  //     return this.subtotal + this.shipping;
  //   }

  //   incrementQty(item: any) {
  //     item.quantity++;
  //   }

  //   decrementQty(item: any) {
  //     if (item.quantity > 1) item.quantity--;
  //   }

  //   removeItem(index: number) {
  //     this.cartItems.splice(index, 1);
  //   }

  //   selectHandling(method: string) {
  //     this.selectedHandlingMethod = method;
  //   }

