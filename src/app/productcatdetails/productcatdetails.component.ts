import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgxImageZoomModule } from 'ngx-image-zoom'; 
import { ProductService } from '../services/product.service';
import mediumZoom from 'medium-zoom';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-productcatdetails',
  imports: [CommonModule,NgxImageZoomModule,RouterModule],
  templateUrl: './productcatdetails.component.html',
  styleUrl: './productcatdetails.component.scss'
})
export class ProductcatdetailsComponent implements OnInit{
  productId: string='';
  pkcode: string = '';
  constructor(private route: ActivatedRoute,private service:ProductService,private router: Router,private http: HttpClient) {}
  proddetails: any = null;
  images: string[] = [];
  selectedImage: string = '';

  product: any = {
    pkid: '1355',
    country: '1',
    uniqid: 'some-uniqid',
    sessid: 'some-session-id',
    ipAddress: '192.168.1.10',
    sprno: '0',
    quantity: 1
  };

  ngOnInit(): void {
  
  this.route.params.subscribe((value) => {
    this.pkcode = value['pkcode'];
    console.log(this.pkcode);
  })

  this.product.uniqid = localStorage.getItem('uniqid') || this.generateUUID();
  this.product.sessid = localStorage.getItem('sessid') || this.generateUUID();

  // Optionally save them
  localStorage.setItem('uniqid', this.product.uniqid);
  localStorage.setItem('sessid', this.product.sessid);

  this.getClientIP(); // sets ipAddress
    console.log("Product code on product details-------------:", this.pkcode);
    if (this.pkcode) {
    this.getproductdetailsinfo();
    } else {
      console.warn("No pkcode provided.");
      // Show a message or redirect if needed
    }

    //this.getproductdetailsinfo();
  }

  generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
getClientIP() {
  this.http.get<{ ip: string }>('https://api.ipify.org?format=json').subscribe({
    next: (res) => {
      this.product.ipAddress = res.ip;
      console.log('addedtocart time ip address',res.ip)
    },
    error: () => {
      this.product.ipAddress = '0.0.0.0'; // fallback
    }
  });
}
  
 getproductdetailsinfo() {

  console.log("are we getting here", this.pkcode)
  this.service.GetProductdetails('NProductDetails', '2', this.pkcode).subscribe(
    (data: any[]) => {

      console.log(data);
      this.proddetails = data.length > 0 ? data[0] : null;
       // Combine images into array
      this.images = [
        this.proddetails?.img,
        this.proddetails?.img1,
        this.proddetails?.img2,
        this.proddetails?.img3
      ].filter(img => img); // Remove undefined/null

      // Set default selected image
      this.selectedImage = this.proddetails?.img;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log("product data",this.proddetails);
    },
    error => {
      console.error(error);
    }
  );
}
  selectImage(img: string) {
    this.selectedImage = img;
  }
  ngAfterViewInit() {
    mediumZoom('.zoomable-img', {
      background: '#fff',
      margin: 24
    });
  }
    // You can now fetch the product details using this.productId


  // activePanel: string = 'overview'; 
  // product = {
  //   code: 'MYSH04',
  //   name: 'SAPPHIRE COMBO 3',
  //   cv: 200,
  //   availability: 'In Stock',
  //   price: 1762.80,
  //   rating: 4.9,
  //   ratingCount: 173,
  //   images: [
  //     'assets/images/14011.jpg',
  //     'assets/images/14012.jpg',
  //     'assets/images/14013.jpg',
  //     'assets/images/14014.jpg'
  //   ]
  // };
  // selectedImage: string = this.product.images[0];

  // selectImage(img: string) {
  //   this.selectedImage = img;
  // }

  benefits = [
    'Harmonize harmful EMF and EMR.',
    'Restores balance & harmony to the body',
    'Strengthens the body’s bio field to protect against electromagnetic waves',
    'Reduces cellular inflammation',
    'Regulates body temperature',
    'Combat depleted energy levels'
  ];

  addToCart(pkcode: string): void {
    console.log("addtocart function-------------",pkcode);
    const payload = {
      Action: 'addRTCartitems',
      Pkid:  this.pkcode,
      Country: this.product.country,
      Uniqid: this.product.uniqid,
      Sessid: this.product.sessid,
      IpAddress: this.product.ipAddress,
      Sprno: this.product.sprno,
      Quantity: this.product.quantity
    };
    console.log('add to cart insert payload:---',payload);
    this.service.addToCartService(payload).subscribe({
    next: (response) => {
    console.log('Added to cart success payload---------------:', response);
    this.router.navigate(['/cart',pkcode]); 
    },
    error: (err) => {
      console.error('Error adding to cart:', err);
    }
    });
  }

}
