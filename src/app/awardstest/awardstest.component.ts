
import { CommonModule } from '@angular/common';
import { Component,ViewEncapsulation  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-awardstest',
  imports: [CommonModule,CarouselModule],
  templateUrl: './awardstest.component.html',
  styleUrl: './awardstest.component.scss'
})
export class AwardstestComponent {
  awards1 = [
    { image: 'Excellence Product_Eng-(2023)-OL-01 EDITED.png', title: 'Excellence Product' },
    { image: 'Honesty Awards.png', title: 'Honesty Awards' },
    { image: 'Masterclass In Direct Selling.png', title: 'Masterclass In Direct Selling' },
    { image: 'Obtainer Award.jpg', title: 'Obtainer Award' },
    { image: 'Peak of Success Award.png', title: 'Peak of Success Award' },
    { image: 'Super Health Brand.jpg', title: 'Super Health Brand' }
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };
}
