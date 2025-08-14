import { CommonModule } from '@angular/common';
import { Component, OnInit ,ViewChild} from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NgbCarouselModule ,NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { CountryService } from '../services/country.service';
import { NewsService } from '../services/news.service';
//import { Router } from 'express';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SocialMediaTabsComponent } from '../social-media-tabs/social-media-tabs.component';
import { HttpClient } from '@angular/common/http';
import { NewsdynamicComponent } from '../newsdynamic/newsdynamic.component';

@Component({
  selector: 'app-home',
  standalone: true,
  //imports: [CommonModule ,RouterOutlet,NgbCarouselModule],
  imports: [CommonModule, NgbCarouselModule, RouterModule,NewsdynamicComponent, FormsModule,SocialMediaTabsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
// export class HomeComponent {
//   title = 'Destina1';
// }
// export class HomeComponent {
//   images = [
//     'assets/slide1.jpg',
//     'assets/slide2.jpg',
//     'assets/slide3.jpg'
//   ];
// }
export class HomeComponent implements OnInit {

  @ViewChild('newsCarouselRef') newsCarouselRef!: NgbCarousel;



  constructor(private service: ProductService, private router: Router, private http: HttpClient, private countryService: CountryService, private newsService: NewsService) { }
  productsdata: any;
  newcarouselItems: any[] = [];
newgroupedItems: any[][] = [];
currentSlide = 0;
 headercartpayload: any = {
  pkid: '1355',
  country: '1',
  uniqid: 'some-uniqid',
  sessid: 'some-session-id',
  ipAddress: '192.168.1.10',
  sprno: '0',
  quantity: 1
  };
  ngOnInit(): void {
    this.getCountry();
      this.getNews();



   }

  // addToCart(_t106: any) {

  // }
  getCountry() {
   this.countryService.getCountryDetails().subscribe({
      next: (data) => {
      localStorage.setItem('country', data.country);
      this.getCountryId(data.country);
      },
      error: (error) => {
        console.error('Error fetching country data', error);
      }
    });
  }

  triggerFns() {
    this.getproductList();
    this.groupAwards();
    this.groupItems();
    this.groupPremierPicks();
    this.groupSlide();
    console.log('calling 2')
    
  }

  getCountryId(countryCode: string) {
    this.countryService.getCountryIdByShortCode(countryCode).subscribe({
      next: (data) => {
        console.log(data)
        if (data && data.length > 0) {
          const countryId = data[0].countryID;
          localStorage.setItem('countryId', countryId);
          this.triggerFns();
        }
      },
      error: (error) => {
        console.error('Error fetching country ID', error);
        this.triggerFns();
      }
    });
  }

getproductList() {
  this.service.GetProductList('2', 'Wellness Care').subscribe({
    next: (data: any) => {
      this.productsdata = data.slice(0, 4);
    },
    error: (error) => {
      console.error('Error fetching product list', error);
    }
  });
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



  slides = [
    {
      image: 'https://destina1.com/images/Pendant-1.jpg'
    },
    {
      image: 'https://destina1.com/images/Biomatrix-Shield.jpg'
    },
    {
      image: 'https://destina1.com/images/Scalarvia-1.jpg'
    }
  ];

  products = [
    {
      image: 'assets/images/etyx0Z.jpg',
      title: 'Health Care'
    },
    {
      image: 'assets/images/2171.jpg',
      title: 'Hair Care'
    },
    {
      image: 'assets/images/2121.jpg',
      title: 'Skin Care'
    },
    {
      image: 'assets/images/2151.jpg',
      title: 'Personal Care'
    }
  ];

  // PremierPicks = [
  //   { image: 'https://destina1.com/images/promotions-blog.jpg' },
  //   { image: 'https://destina1.com/images/SUPERSAVERS-new.jpg' },
  //   { image: 'https://destina1.com/images/HEALTH-CONSULTATION.jpg' }
  // ];



  //Newly Added

  PremierPicks = [
  {
    image: 'https://destina1.com/images/promotions-blog.jpg',
    link: 'https://destina1.com/#/Promotion'
  },
  {
    image: 'https://destina1.com/images/SUPERSAVERS-new.jpg',
    link: 'https://destina1.com/#/SpecialEdition'
  },
  {
    image: 'https://destina1.com/images/HEALTH-CONSULTATION.jpg',
    link: 'https://destina1.com/#/Health-Appointment'
  },
  {
    image: 'https://destina1.com/images/GLOBAL-ACHIEVERS-BLOG-02-02.jpg',
    link: 'https://destina1.com/#/GlobalAchievers'
  },
  {
    image: 'https://destina1.com/images/SUPERSAVERS-new.jpg',
    link: 'https://destina1.com/#/SpecialSale'
  },
   {
    image: 'https://destina1.com/images/HEALTH-CONSULTATION.jpg',
    link: 'https://destina1.com/#/SpecialSale'
  }
  

];

groupedPremierPicks: any[][] = [];
currentPremierSlide = 0;

groupPremierPicks() {
  const groupSize = 3;
  this.groupedPremierPicks = [];

  for (let i = 0; i < this.PremierPicks.length; i += groupSize) {
    this.groupedPremierPicks.push(this.PremierPicks.slice(i, i + groupSize));
  }
}

onPremierSlide(event: any) {

  const currentId = event.current;
  const match = currentId.match(/premier-slide-(\d+)/);
  if (match) {
    this.currentPremierSlide = +match[1] ;
  }
}


awards = [
  {
    img: 'https://destina1.com/images/Excellence%20Product_Eng-(2023)-OL-01%20EDITED.png',
    title: 'ASIA PACIFIC ENTREPRENEUR <span>EXCELLENCE AWARD</span><span>EXCELLENCE PRODUCT</span> <span>2013</span>'
  },
  {
    img: 'assets/images/Honesty Awards.png',
    title: 'ASIA HONESTY AWARDS <span>2013</span>'
  },
  {
    img: 'assets/images/Masterclass In Direct Selling.png',
    title: 'MASTERCLASS IN DIRECT SELLING <span>AWARD</span> <span>2013</span>'
  },
   {
    img: 'https://destina1.com/images/Excellence%20Product_Eng-(2023)-OL-01%20EDITED.png',
    title: 'ASIA PACIFIC ENTREPRENEUR <span>EXCELLENCE AWARD</span><span>EXCELLENCE PRODUCT</span> <span>2013</span>'
  },
  {
    img: 'assets/images/Honesty Awards.png',
    title: 'ASIA HONESTY AWARDS <span>2013</span>'
  },
  {
    img: 'assets/images/Masterclass In Direct Selling.png',
    title: 'MASTERCLASS IN DIRECT SELLING <span>AWARD</span> <span>2013</span>'
  },
   {
    img: 'https://destina1.com/images/Excellence%20Product_Eng-(2023)-OL-01%20EDITED.png',
    title: 'ASIA PACIFIC ENTREPRENEUR <span>EXCELLENCE AWARD</span><span>EXCELLENCE PRODUCT</span> <span>2013</span>'
  },
  {
    img: 'assets/images/Honesty Awards.png',
    title: 'ASIA HONESTY AWARDS <span>2013</span>'
  },
  {
    img: 'assets/images/Masterclass In Direct Selling.png',
    title: 'MASTERCLASS IN DIRECT SELLING <span>AWARD</span> <span>2013</span>'
  },
   {
    img: 'https://destina1.com/images/Excellence%20Product_Eng-(2023)-OL-01%20EDITED.png',
    title: 'ASIA PACIFIC ENTREPRENEUR <span>EXCELLENCE AWARD</span><span>EXCELLENCE PRODUCT</span> <span>2013</span>'
  },
  {
    img: 'assets/images/Honesty Awards.png',
    title: 'ASIA HONESTY AWARDS <span>2013</span>'
  },
  {
    img: 'assets/images/Masterclass In Direct Selling.png',
    title: 'MASTERCLASS IN DIRECT SELLING <span>AWARD</span> <span>2013</span>'
  },
   {
    img: 'https://destina1.com/images/Excellence%20Product_Eng-(2023)-OL-01%20EDITED.png',
    title: 'ASIA PACIFIC ENTREPRENEUR <span>EXCELLENCE AWARD</span><span>EXCELLENCE PRODUCT</span> <span>2013</span>'
  },
  {
    img: 'assets/images/Honesty Awards.png',
    title: 'ASIA HONESTY AWARDS <span>2013</span>'
  },
  {
    img: 'assets/images/Masterclass In Direct Selling.png',
    title: 'MASTERCLASS IN DIRECT SELLING <span>AWARD</span> <span>2013</span>'
  },
];

awardsGrouped: any[][] = [];
currentawardsSlide = 0;

groupAwards() {
  const groupSize = 3;
  this.awardsGrouped = [];
  for (let i = 0; i < this.awards.length; i += groupSize) {
    this.awardsGrouped.push(this.awards.slice(i, i + groupSize));
  }
};

onAwardsSlide(event: any) {
  const currentId = event.current;
  const match = currentId.match(/awards-slide-(\d+)/);
  if (match) {
    this.currentawardsSlide = +match[1];
  }
  else {
    alert("No match found for awards slide ID");
  }
}



  testimonials = [
  {
    image: 'https://img.youtube.com/vi/glyN9mcNMpk/0.jpg',
    text: 'At 78 years old I am still active and full of energy',
    author: 'Mdm Rajeswary'
  },
  {
    image: 'https://img.youtube.com/vi/Nk3QydrV45Y/0.jpg',
    text: 'D1 Product made my patience to walk back like normal !!!',
    author: 'Dr. John S Hory'
  },
  {
    image: 'https://img.youtube.com/vi/zyQQCY2ifNM/0.jpg',
    text: 'My pain due to left Patella Fracture is gone now!!!',
    author: 'mam alice'
  },
  {
    image: 'http://localhost:63759/images/testimony6.png',
    text: 'Illness and lack of energy at the foot and pain in the waist, all the pain and lack of energy was loSri Winarti',
    author: 'Sri vinarti'
  },
  // Add more testimonials here
];

groupSlideArray: any[][] = [];
currentGroupSlide = 0;

groupSlide() {
  const groupSize = 2;
  this.groupSlideArray = [];
  for (let i = 0; i < this.testimonials.length; i += groupSize) {
    this.groupSlideArray.push(this.testimonials.slice(i, i + groupSize));
  }
}

onGroupSlide(event:any){
   const currentId = event.current;
  const match = currentId.match(/Groupslide-(\d+)/);
  if(match){
    this.currentGroupSlide =  +match[1];
  }
}



onSlide(event: any) {
  const match = event.current.match(/slide-(\d+)/);
  this.currentGroupSlide =  +match[1];
}


// PremierPicks = [
//   { image: 'https://destina1.com/images/promotion.jpg', link: 'https://destina1.com/#/Promotion', title: 'Special Promo', text: 'Don’t miss our latest promotion!' },
//   { image: 'https://destina1.com/images/loyalty.jpg', link: 'https://destina1.com/#/LoyaltyProgram', title: 'Loyalty Program', text: 'Earn points every purchase.' },
//   { image: 'https://destina1.com/images/consultation.jpg', link: 'https://destina1.com/#/HealthConsultation', title: 'Free Consultation', text: 'Talk to our experts.' },
//   { image: 'https://destina1.com/images/achievers.jpg', link: 'https://destina1.com/#/GlobalAchievers', title: 'Global Achievers', text: 'Celebrating our top members.' },
//   { image: 'https://destina1.com/images/special-sale.jpg', link: 'https://destina1.com/#/SpecialSale', title: 'Flash Sale', text: 'Limited time offers!' },
//   { image: 'https://destina1.com/images/expert-panel.jpg', link: 'https://destina1.com/#/ExpertPanel', title: 'Expert Panel', text: 'Meet our advisory team.' }
// ];


// currentPremierSlide: number = 0;

// groupPicks(): void {
//   const size = 3;
//   for (let i = 0; i < this.PremierPicks.length; i += size) {
//     this.groupedPicks.push(this.PremierPicks.slice(i, i + size));
//   }
// }

// onPremierSlide(event: any): void {
//   const match = event.current.match(/slide-(\d+)/);
//   this.currentPremierSlide = match ? +match[1] : 0;
// }


  categories = [
    {
      name: 'Health Care',
      image: 'assets/images/tsHJp9.jpg',
      //link: '/health-care'
    },
    {
      name: 'Hair Care',
      image: 'assets/images/2121.jpg',
      //link: '/hair-care'
    },
    {
      name: 'Skin Care',
      image: 'assets/images/2151.jpg',
      //link: '/skin-care'
    },
    {
      name: 'Personal Care',
      image: 'assets/images/2121.jpg',
      //link: '/personal-care'
    }
  ];

  announcements = [
    {
      image: 'https://destina1.com/images/WHATS-NEW.jpg',
      link: 'https://destina1.com/#/TNP',
      title: 'PRODUCTS TEMPORARILY NOT AVAILABLE (TNA)',
      description: 'Click VIEW MORE for more details',
      //link: '/announcement/tna'
    },
    {
      image: 'https://destina1.com/images/DISCONTINUED-EDITION-01-01.jpg',
        link:'https://destina1.com/#/NLA',
      title: 'PRODUCTS NO LONGER AVAILABLE (NLA)',
      description: 'Click VIEW MORE for more details',

      //link: '/announcement/nla'
    },
    {
      image: 'https://destina1.com/images/public-holiday.jpg',
         link:'https://destina1.com/#/PHA',
      title: 'PUBLIC HOLIDAY SHOP CLOSURE',
      description: 'Click VIEW MORE for more details.',

      //link: '/announcement/holiday'
    }
  ];

   selectedTab: string = 'facebook';

  tabs = [
    { id: 'facebook', icon: 'fa-facebook-f', color: '#4867aa' },
    { id: 'instagram', icon: 'fa-instagram', gradient: true },
    { id: 'tiktok', icon: 'fa-tiktok', color: '#000' },
    { id: 'youtube', icon: 'fa-youtube', color: '#ff0000' },
    { id: 'linkedin', icon: 'fa-linkedin-in', color: '#0077b5' }
  ];

  facebookItems = [
    {
      img: 'https://destina1.com/images/fb-event001.jpg',
      link: 'https://www.facebook.com/Destina1int/videos/1033698247756287',
      isVideo: true
    },
    {
      img: 'https://destina1.com/images/fb-event04.jpg',
      link: 'https://www.facebook.com/photo/?fbid=823679919801413&set=pb.100064782363963.-2207520000',
      isVideo: false
    },
    {
      img: 'https://destina1.com/images/fb-event03.jpg',
      link: 'https://www.facebook.com/Destina1int/videos/7662481057114753',
      isVideo: true
    },
    {
      img: 'https://destina1.com/images/fb-event002.jpg',
      link: 'https://www.facebook.com/watch/?v=1254033921930559',
      isVideo: true
    }
  ];

 brandLogos: string[] = [
 'https://destina1.com/images/LOGO-QUANTES-TECHNOLOGY.png',
    'https://destina1.com/images/biomatrix-shield-brand-logo.png',
    'https://destina1.com/images/LOGO-KRITALIA&CO.png',
    'https://destina1.com/images/LOGO-SCALARVIA.png',
    'https://destina1.com/images/uniwave.png'
  ];
 repeatArray = Array(6);


  productscat = [
    { name: 'D1 ADVANCE SCALAR ENERGIZED PENDANT', code: 'MYD1MR001', price: 'RM 475.25', imgSrc: 'assets/images/Edit-4650.png', link: 'sapphire-combo3.html' },
    { name: 'D1 ADVANCE SCALAR ENERGIZED FLASK', code: 'MYD1MR002', price: 'RM 475.25', imgSrc: 'assets/images/Edit-4676.png', link: 'pearl-scalarvia.html' },
    { name: 'D1 ADVANCE SCALAR ENERGIZED STICK', code: 'MYD1MR003', price: 'RM 475.25', imgSrc: 'assets/images/Edit-4654.png', link: 'jade-scalarvia.html' },
    { name: 'D1 ADVANCE SCALAR ENERGIZED SCALARVIA', code: 'MYD1MR004', price: 'RM 240.00', imgSrc: 'assets/images/Edit-1565-with logo.png', link: 'sapphire-bio-matrix.html' }
  ];

  addToCart(pkcode: string): void {
    const payload = {
      Action: 'addRTCartitems',
      Pkid:  pkcode,
      Country: this.headercartpayload.country,
      Uniqid: this.headercartpayload.uniqid,
      Sessid: this.headercartpayload.sessid,
      IpAddress: this.headercartpayload.ipAddress,
      Sprno: this.headercartpayload.sprno,
      Quantity: this.headercartpayload.quantity
    };
    console.log('home add cart payload:---',payload);
    this.service.addToCartService(payload).subscribe({
    next: (response) => {
    console.log('Home Added to header cart:', response);
    this.router.navigate(['/headercart']);
    },
    error: (err) => {
      console.error('Error adding to cart:', err);
    }
    });
  }

   


  // getNews() {
  //   console.log("calling")
  //   this.newsService.getNews().subscribe({
  //     next: (response) => {
  //       console.log('News data:', response);
  
  //         this.newcarouselItems = response.newslist.map((item: any) => ({
  //           image: `https://admin.destina1.com/FileUpload/News/${item.imagename}`,
  //           title: item.title,
  //           text: item.descr,
  //         }));
  //         console.log('New Carousel Items:', this.newcarouselItems);
          
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error fetching news:', err);
  //     }
  //   });
  // }

  

   

currentNewsSlide = 0;

getNews() {
  this.newsService.getNews().subscribe({
    next: (response) => {
      const allItems = response.newslist || [];
      const selected = allItems.slice(0, 6); // only 6 items for 2 slides

      this.newcarouselItems = selected.map((item: any) => ({
        image: `https://admin.destina1.com/FileUpload/News/${item.imagename}`,
        title: item.title,
        text: item.descr
      }));

      this.groupNewsItems(); // Group after mapping
    },
    error: (err) => {
      console.error('Failed to fetch news:', err);
    }
  });
}

groupNewsItems() {
  const groupSize = 3;
  this.newgroupedItems = [];

  for (let i = 0; i < this.newcarouselItems.length; i += groupSize) {
    this.newgroupedItems.push(this.newcarouselItems.slice(i, i + groupSize));
  }
}

onNewsSlide(event: any) {
  const currentId = event.current;
  const match = currentId.match(/news-slide-(\d+)/);
  if (match) {
    this.currentNewsSlide = +match[1];
  }
}

// Utility function to chunk array
// chunkArray(arr: any[], chunkSize: number): any[] {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     chunks.push(arr.slice(i, i + chunkSize));
//   }
//   return chunks;
// }
chunkArray(arr: any[], chunkSize: number): any[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

onSlide1(event: any) {
  const activeId = event.current;
  this.currentSlide = parseInt(activeId.replace('slide-', ''), 10);
}


  // newcarouselItems = [
  //   {
  //     image: 'https://admin.destina1.com/FileUpload/News/20250918070959885916.jpg',
  //     title: 'DESTINA1 INTERNATIONAL EARNS GLOBAL RECOGNITION...',
  //     text: 'Destina1 International continues to strengthen...'
  //   },
  //   {
  //     image: 'https://admin.destina1.com/FileUpload/News/20254413014409461979.jpg',
  //     title: 'DESTINA1 INTERNATIONAL ACHIEVES HISTORIC SUCCESS...',
  //     text: 'Dear Valued Members and Partners, We are thrilled...'
  //   },
  //   {
  //     image: 'https://admin.destina1.com/FileUpload/News/20245626075650570313.jpg',
  //     title: 'DESTINA1 INTERNATIONAL SHINES AT GOLF COMPETITION...',
  //     text: 'Destina1 International proudly served as a Silver...'
  //   },
  //   {
  //     image: 'https://admin.destina1.com/FileUpload/News/20254205104248147837.jpeg',
  //     title: 'DESTINA1 INTERNATIONAL SHINES AT GOLF COMPETITION...',
  //     text: 'Destina1 International proudly served as a Silver...'
  //   },
  //   {
  //     image: 'https://admin.destina1.com/FileUpload/News/20251718071741163439.jpg',
  //     title: 'DESTINA1 INTERNATIONAL SHINES AT GOLF COMPETITION...',
  //     text: 'Destina1 International proudly served as a Silver...'
  //   },
  //   {
  //     image: 'https://admin.destina1.com/FileUpload/News/20251418071417960791.jpg',
  //     title: 'DESTINA1 INTERNATIONAL SHINES AT GOLF COMPETITION...',
  //     text: 'Destina1 International proudly served as a Silver...'
  //   }
  //   //
  // ];

   groupItems() {
    const groupSize = 3;
    for (let i = 0; i < this.newcarouselItems.length; i += groupSize) {
      this.newgroupedItems.push(this.newcarouselItems.slice(i, i + groupSize));
    }
  }
  customOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  }


isDropdownOpen = false;

selectedCategory: string | null = null;

// Sample data - replace with actual data from service
wellnessProducts: any[] = [

];

toggleDropdown(event: Event) {
  event.stopPropagation();
  this.isDropdownOpen = !this.isDropdownOpen;
}

selectCategory(category: string) {
  this.selectedCategory = category;
  this.isDropdownOpen = false;
}

}          
