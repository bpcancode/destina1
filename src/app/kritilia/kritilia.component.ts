import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kritilia',
  imports: [CommonModule],
  templateUrl: './kritilia.component.html',
  styleUrl: './kritilia.component.scss'
})
export class KritiliaComponent {

  categories = [
    { name: 'Necklaces', img: 'https://admin.destina1.com/admin/RetailImages/KRC111.jpg' },
    { name: 'Rings', img: 'https://admin.destina1.com/admin/RetailImages/KRR021.jpg' },
    { name: 'Bracelets', img: 'https://admin.destina1.com/admin/RetailImages/KRB041.jpg' },
    { name: 'Jewellery Sets', img: 'https://admin.destina1.com/admin/RetailImages/KRC131.jpg' }
  ];

   trendingProducts = [
    { img: 'assets/images/products/prd1.jpg' },
    { img: 'assets/images/products/prd2.jpg' },
    { img: 'assets/images/products/prd3.jpg' },
    { img: 'assets/images/products/prd4.jpg' }
  ];

  giftCategories = [
    { title: 'Gifts For Her', img: 'assets/images/gift-for-her.jpg' },
    { title: 'Wedding Gifts', img: 'assets/images/WEDDING-GIFTS.jpg' },
    { title: 'Gifts For Him', img: 'assets/images/gift-for-him.jpg' }
  ];

  fGetCatProduct(category: string) {
    console.log('Category Clicked:', category);
    // Navigate or load data here
  }

  fGetSngProduct(product: any) {
    console.log('Product Clicked:', product);
    // Navigate or show product
  }


}
