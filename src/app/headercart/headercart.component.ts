// import { Component } from '@angular/core';
// import { ProductService } from '../services/product.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-headercart',
//   imports: [CommonModule],
//   templateUrl: './headercart.component.html',
//   styleUrl: './headercart.component.scss'
// })
// export class HeadercartComponent {
// data1: any[] = [];
//   data3: any[] = [];
//   headercartItems: any = null;
  // productList: any[] = [];
  // pkgitems: any[] = [];
  // TotQty = 0;
  // Etotal = 0;
  // TotalCV = 0;
  // pkgcode: string = '';
  // SubLink: string = 'Category';
  // ParentLink: string = 'Products';
  // Header: string = 'Cart';
  // prpackages = false;
  // productsdata: any;
  // paramhcart: any = {
  //   pkid: 'MYAST001',
  //   pid: '0',
  //   uniqid: 'some-uniqid',
  //   sessid: 'some-session-id',
  //   ipAddress: '152.59.195.170',
  //   sprno: '0',
  //   quantity: 0,
  //   prdtype: 'Package'
  // };
  // constructor(private service: ProductService) {}

  // ngOnInit(): void {

  //    this.paramhcart.uniqid = localStorage.getItem('uniqid');
  //   this.paramhcart.sessid = localStorage.getItem('sessid');

  //   this.getCartbucketItemsInfo();
  //   this.getproductList();
  // }

  // getproductList() {
  //   this.service.GetProductList('1', 'Wellness Care').subscribe(
  //     data => {

  //       console.log('Product List:', data);
  //       this.productsdata = data;  // assuming data is an array of products
        
  //     },

  //     error => {
  //       console.error('Error fetching product list', error);
  //     }
  //   );
  // }
  // getCartbucketItemsInfo(): void {
  //   const payload = {
  //     Action: 'getNcartitems',
  //     Pkid: 'MYAST001',
  //     Pid: this.paramhcart.pid,
  //     Quantity: this.paramhcart.quantity,
  //     Uniqid: this.paramhcart.uniqid,
  //     Sessid: this.paramhcart.sessid,
  //     IpAddress: this.paramhcart.ipAddress,
  //     Sprno: this.paramhcart.sprno,
  //     Prdtype: this.paramhcart.prdtype

  //   };

  //   // this.service.getCartbucketItems(payload).subscribe((res: any) => {
    //   console.log("get cart info --------------------------",res);
    //    this.data1 = res;
    // });

    // this.service.getCartbucketItems(payload).subscribe({
    //   next: (response: any) => {
    //     console.log("Header cart Get payload-------------", payload);
    //     console.log('get header cart data checking--------:', response);
    //     this.headercartItems = response.cartItems || [];
    //     //this.tempcartvalue=response.productList
        // this.cartCount = response.cartCountDetails?.openCartCount || 0;
        // this.productList = response.productList || [];
        //this.shippingCharges = response.shipping?.shipChrgs || 0;
        // this.headercartItems = this.productList.map((prod: any) => ({
          // image: prod.pimage,// ? `https://yourcdn.com/images/${prod.pimage}` : 'assets/images/placeholder.png',
          // name: prod.pkname,
          // code: prod.pkcode,
          // price: parseFloat(prod.price),
          // quantity: prod.qty,
        //   cv: prod.cv,
        //   inStock: true, // Assuming in stock; change if you have a flag
        //   amPerks: 5 // Example; replace with actual logic if available
        // }));
      // console.log("this is testing data--------------", this.headercartItems );
        //this.updateTotal();
    //   },
    //   error: (err) => {
    //     console.error('Error to cart:', err);
    //   }
    // })
  // }

// getSubtotal(): number {
//   return this.headercartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
// }

// getTotalCV(): number {
//   return this.headercartItems.reduce((sum, item) => sum + item.cv * item.quantity, 0);
// }

// submitCart() {
  // Add your actual submit logic here
//   alert("Cart submitted!");
// }
  // incrementQuantity(pkcode: string): void {
  //   this.service.updateQuantity(pkcode, 1).subscribe(() => this.getCartItems());
  // }

  // deccrementQuantity(pkcode: string): void {
  //   this.service.updateQuantity(pkcode, -1).subscribe(() => this.getCartItems());
  // }

  // RemoveProduct(pkid: string): void {
  //   this.cartService.removeItem(pkid).subscribe(() => this.getCartItems());
  // }

  // SelPrds(pkcode: string): void {
  //   this.pkgcode = pkcode;
  //   this.service.getPackageProducts(pkcode).subscribe((res: any) => {
  //     this.pkgitems = res;
  //     const modal: any = new (window as any).bootstrap.Modal(document.getElementById('exampleModalCenter'));
  //     modal.show();
  //   });
  // }

  // AddtoCartItems(): void {
  //   this.service.addPackageItems(this.pkgitems).subscribe(() => this.getCartItems());
  //   const modal: any = new (window as any).bootstrap.Modal(document.getElementById('exampleModalCenter'));
  //   modal.hide();
  // }

  // fpopclose(): void {
  //   const modal: any = new (window as any).bootstrap.Modal(document.getElementById('exampleModalCenter'));
  //   modal.hide();
  // }

  // fSubmit(): void {
  //   this.service.submitOrder().subscribe(() => alert('Order Submitted Successfully'));
  // }
// }





import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-headercart',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './headercart.component.html',
  styleUrl: './headercart.component.scss'
})
export class HeadercartComponent {
data1: any[] = [];
  data3: any[] = [];
  headercartItems: any = null;
  productList: any[] = [];
  pkgitems: any[] = [];
  // TotQty = 0;
  // Etotal = 0;
  // TotalCV = 0;
  totalQuantity = 0;
  subtotal: number = 0;
  shipping: number = 10; // example flat shipping
  total: number = 0;
  totalCV: number = 0;

  pkgcode: string = '';
  SubLink: string = 'Category';
  ParentLink: string = 'Products';
  Header: string = 'Cart';
  prpackages = false;
  productsdata: any;
  paramhcart: any = {
    pkid: 'MYAST001',
    pid: '0',
    uniqid: 'some-uniqid',
    sessid: 'some-session-id',
    ipAddress: '152.59.195.170',
    sprno: '0',
    quantity: 0,
    prdtype: 'Package'
  };
  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {

     this.paramhcart.uniqid = localStorage.getItem('uniqid');
    this.paramhcart.sessid = localStorage.getItem('sessid');

    this.getCartbucketItemsInfo();
    this.getproductList();
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
  getCartbucketItemsInfo(): void {
    const payload = {
      Action: 'getNcartitems',
      Pkid: 'MYAST001',
      Pid: this.paramhcart.pid,
      Quantity: this.paramhcart.quantity,
      Uniqid: this.paramhcart.uniqid,
      Sessid: this.paramhcart.sessid,
      IpAddress: this.paramhcart.ipAddress,
      Sprno: this.paramhcart.sprno,
      Prdtype: this.paramhcart.prdtype

    };

    // this.service.getCartbucketItems(payload).subscribe((res: any) => {
    //   console.log("get cart info --------------------------",res);
    //    this.data1 = res;
    // });

    this.service.getCartbucketItems(payload).subscribe({
      next: (response: any) => {
        console.log("Header cart Get payload-------------", payload);
        console.log('get header cart data checking--------:', response);
        this.headercartItems = response.cartItems || [];
        //this.tempcartvalue=response.productList
        // this.cartCount = response.cartCountDetails?.openCartCount || 0;
        this.productList = response.productList || [];
        //this.shippingCharges = response.shipping?.shipChrgs || 0;
        this.headercartItems = this.productList.map((prod: any) => ({
          image: prod.pimage,// ? `https://yourcdn.com/images/${prod.pimage}` : 'assets/images/placeholder.png',
          name: prod.pkname,
          code: prod.pkcode,
          price: parseFloat(prod.price),
          quantity: prod.qty,
          cv: prod.cv,
          inStock: true, // Assuming in stock; change if you have a flag
          amPerks: 5 // Example; replace with actual logic if available
        }));
      console.log("this is testing data--------------", this.headercartItems );
        this.updateTotal();
      },
      error: (err) => {
        console.error('Error to cart:', err);
      }
    })
    
    
  }

// getSubtotal(): number {
//   return this.headercartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
// }

// getTotalCV(): number {
//   return this.headercartItems.reduce((sum, item) => sum + item.cv * item.quantity, 0);
// }

submitCart() {
  // Add your actual submit logic here
  alert("Cart submitted!");
}
  // incrementQuantity(pkcode: string): void {
  //   this.service.updateQuantity(pkcode, 1).subscribe(() => this.getCartItems());
  // }

  // deccrementQuantity(pkcode: string): void {
  //   this.service.updateQuantity(pkcode, -1).subscribe(() => this.getCartItems());
  // }

  // RemoveProduct(pkid: string): void {
  //   this.cartService.removeItem(pkid).subscribe(() => this.getCartItems());
  // }

  // SelPrds(pkcode: string): void {
  //   this.pkgcode = pkcode;
  //   this.service.getPackageProducts(pkcode).subscribe((res: any) => {
  //     this.pkgitems = res;
  //     const modal: any = new (window as any).bootstrap.Modal(document.getElementById('exampleModalCenter'));
  //     modal.show();
  //   });
  // }

  // AddtoCartItems(): void {
  //   this.service.addPackageItems(this.pkgitems).subscribe(() => this.getCartItems());
  //   const modal: any = new (window as any).bootstrap.Modal(document.getElementById('exampleModalCenter'));
  //   modal.hide();
  // }

  // fpopclose(): void {
  //   const modal: any = new (window as any).bootstrap.Modal(document.getElementById('exampleModalCenter'));
  //   modal.hide();
  // }

  // fSubmit(): void {
  //   this.service.submitOrder().subscribe(() => alert('Order Submitted Successfully'));
  // }

  updateTotal() {
    if (!this.headercartItems || !Array.isArray(this.headercartItems)) {
      this.headercartItems = [];
    }
    this.subtotal = this.headercartItems.reduce((sum: number, item: any) => {
      return sum + (item.price * item.quantity);
    }, 0);
    this.totalCV = this.headercartItems.reduce((sum: number, item: any) => {
      return sum + (item.cv);
    }, 0);
    this.total = this.subtotal + this.shipping;
     // NEW: Calculate total quantity
  this.totalQuantity = this.headercartItems.reduce((sum: number, item: any) => {
    return sum + item.quantity;
  }, 0);

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
   increaseQty1(product: any) {
    product.quantity = (product.quantity || 1) + 1;
  }
   decreaseQty1(product: any) {
    if (!product.quantity) {
      product.quantity = 1;
    } else if (product.quantity > 1) {
      product.quantity--;
    }
  }
 suggestedCartItems(pkcode: string): void {
  console.log("header cart list id", pkcode);
    const payload = {
      Action: 'addRTCartitems',
      Pkid:  pkcode,
      Country: this.paramhcart.country,
      Uniqid: this.paramhcart.uniqid,
      Sessid: this.paramhcart.sessid,
      IpAddress: this.paramhcart.ipAddress,
      Sprno: this.paramhcart.sprno,
      Quantity: this.paramhcart.quantity
    };
    console.log('headercart product list add cart payload:---',payload);
    this.service.addToCartService(payload).subscribe({
    next: (response) => {
    console.log('------------------success to added:', response);
    //this.router.navigate(['/headercart']); 
    },
    error: (err) => {
      console.error('Error adding to cart:', err);
    }
    });
  }
}



