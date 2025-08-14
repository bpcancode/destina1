// news.component.ts
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { NewsService } from '../services/news.service';
// import { NewsdynamicComponent } from '../newsdynamic/newsdynamic.component';
// news.model.ts
// src/app/news/news.model.ts
// export interface NewsItem {
//   eventid: number;
//   slugUrl: string;
//   categorySlugUrl: string;
//   imagename: string;
//   title: string;
//   Descr: string;
// }


// @Component({
//   selector: 'app-news',
//   imports:[CommonModule],
//   templateUrl: './news.component.html',
//   styleUrls: ['./news.component.scss']
// })
// export class NewsComponent implements OnInit {
//    tabs = [
//     { id: 'all', label: 'ALL', category: null },
//     { id: 'hope', label: 'HOPE FOR MANKIND', category: 'hope-for-mankind' },
//     { id: 'sponsorship', label: 'SPONSORSHIP', category: 'sponsorship' },
//     { id: 'vvip', label: 'VVIP PRODUCT USERS', category: 'vvip-product-users' },
//     { id: 'flash', label: 'FLASH NEWS', category: 'flash-news' },
//     { id: 'launch', label: 'DESTINA WEBSITE LAUNCHING', category: 'destina--website-launching' },
//     { id: 'wishes', label: 'FESTIVAL WISHES', category: 'festival-wishes' },
//     { id: 'events', label: 'EVENTS', category: 'events-' }
//   ];

//   selectedTab = 'all';

//   NewsDet: NewsItem[] = [];

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.NewsDet = [
//       {
//         eventid: 1,
//         slugUrl: 'news-1',
//         categorySlugUrl: 'vvip-product-users',
//         imagename: 'https://admin.destina1.com/FileUpload/News/20254205104248147837.jpeg',
//         title: 'Youth Chess Tournament Empowers Minds at Lotus Pusat Bandar Puchong',
//         Descr: 'Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May …'
//       },
//       {
//         eventid: 2,
//         slugUrl: 'news-2',
//         categorySlugUrl: 'vvip-product-users',
//         imagename: 'https://admin.destina1.com/FileUpload/News/20251718071741163439.jpg',
//         title: 'Mr. Thiwakaran Muagan Wins Leadership Excellence Award at Titan Business Leadership Awards 2025',
//         Descr: 'Destina1 International proudly congratulates Mr. Thiwakaran Muagan, Group Chief Marketing Officer (CMO), on being hono…'
//       },
//       {
//         eventid: 3,
//         slugUrl: 'news-3',
//         categorySlugUrl: 'vvip-product-users',
//         imagename: 'https://admin.destina1.com/FileUpload/News/20251418071417960791.jpg',
//         title: 'Madam Nithiya Karunakaran Honored with the Inspirational Icon Award at Titan Business Leadership Awa',
//         Descr: 'Destina1 International proudly celebrates the remarkable achievement of Madam Nithiya Karunakaran, Group Chief Operati…'
//       },
//       {
//         eventid: 4,
//         slugUrl: 'news-4',
//         categorySlugUrl: 'vvip-product-users',
//         imagename: 'https://admin.destina1.com/FileUpload/News/20250918070959885916.jpg',
//         title: 'Destina1 International Earns Global Recognition at Titan Business Leadership Awards 2025',
//         Descr: 'Destina1 International continues to strengthen its position as a leader in social entrepreneurship with an outstanding.'
//       }
//     ];
//   }

//   selectTab(tabId: string): void {
//     this.selectedTab = tabId;
//   }

//   get filteredNews(): NewsItem[] {
//     const selected = this.tabs.find(t => t.id === this.selectedTab);
//     return selected?.category
//       ? this.NewsDet.filter(n => n.categorySlugUrl === selected.category)
//       : this.NewsDet;
//   }

//   fGetNewsContent(eventId: number, slugUrl: string): void {
//     this.router.navigate(['/news', slugUrl]);
//   }
// }

import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsItems: any[] = [];
  selectedTab = 'all';


  tabs = [
    { id: 'all', label: 'ALL', category: null },
    { id: 'hope', label: 'HOPE FOR MANKIND', category: 'hope-for-mankind' },
    { id: 'sponsorship', label: 'SPONSORSHIP', category: 'sponsorship' },
    { id: 'vvip', label: 'VVIP PRODUCT USERS', category: 'vvip-product-users' },
    { id: 'launch', label: 'DESTINA WEBSITE LAUNCHING', category: 'destina--website-launching' },
    { id: 'wishes', label: 'FESTIVAL WISHES', category: 'festival-wishes' },
    { id: 'events', label: 'EVENTS', category: 'events-' }
  ];

  constructor(private http: HttpClient, private router: Router, private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  selectTab(tabId: string): void {
    this.selectedTab = tabId;
    const selected = this.tabs.find(t => t.id === tabId);
    const category = selected?.category || 'all';
    this.loadNews(category);
  }

  get filteredNews(): any[] {
    const selected = this.tabs.find(t => t.id === this.selectedTab);
    return selected?.category
      ? this.newsItems.filter(n => n.categorySlugUrl === selected.category)
      : this.newsItems;
  }

  fGetNewsContent(eventId: number, slugUrl: string): void {
    this.router.navigate(['/news', slugUrl]);
  }

 loadNews(category: string = 'all'): void {
  const payload = {
    category: category,
    action: 'GetOpendisp',
    title: 'News',
    imgpath: '',
    descr: '',
    url: '',
    countryId: 1,
    sesuer: '',
    sesid: ''
  };

  this.newsService.getNews().subscribe(
    {
      next: (response) => {
        console.log(response);
        if (response.newslist && Array.isArray(response.newslist)) {
          this.newsItems = response.newslist.map((item: any) => ({
            title: item.title,
            descr: item.descr,
            imagename: item.imagename
              ? `https://admin.destina1.com/FileUpload/News/${item.imagename}` // Corrected string interpolation
              : 'https://destina1.com/newsimages/default-news.jpg', // Default image URL
            url: item.url,
            slugUrl: item.slugUrl,
            eventid: item.eventid,
            categorySlugUrl: item.categorySlugUrl
          }));
        }
      },
      error: (err) => {
        console.error('Failed to load news:', err);
      }
    }
  );

  this.http.post<any>('https://localhost:44322/api/news', payload).subscribe({
    next: (response) => {
      if (response.newslist && Array.isArray(response.newslist)) {
        this.newsItems = response.newslist.map((item: any) => ({
          title: item.title,
          descr: item.descr,
          imagename: item.imagename
            ? `https://admin.destina1.com/FileUpload/News/${item.imagename}` // Corrected string interpolation
            : 'https://destina1.com/newsimages/default-news.jpg', // Default image URL
          url: item.url,
          slugUrl: item.slugUrl,
          eventid: item.eventid,
          categorySlugUrl: item.categorySlugUrl
        }));
      }
    },
    error: (err) => {
      console.error('Failed to load news:', err);
    }
  });
}
 onImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'https://destina1.com/newsimages/default-news.jpg';
  }
}



  // activeTabIndex = 0;

  // tabs = [
  //   {
  //     title: 'All',
  //     content: [
  //       {
  //         title: 'New Project Launch',
  //         shortdesc:"D1 Food Bank invited by the Ministry and Yayasan Food Bank to be part of Food Collection and Distrib",
  //         description:"On 21st January 2020, the Ministry of Domestic Trade, Cooperatives and Consumer Affairs (KDNHEP) along with Yayasan Food. . .",
  //         image: 'assets/images/news-1.jpg',
  //         date: 'May 1, 2025'
  //       },
  //       {
  //         title: 'Tech Conference 2025',
  //         shortdesc:"D1 Food Bank invited by the Ministry and Yayasan Food Bank to be part of Food Collection and Distrib",
  //         description:"On 21st January 2020, the Ministry of Domestic Trade, Cooperatives and Consumer Affairs (KDNHEP) along with Yayasan Food. . .",
  //         image: 'assets/images/news-2.jpg',
  //         date: 'May 3, 2025'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Business',
  //     content: [
  //       {
  //         title: 'Market Trends Today',
  //         shortdesc:"D1 Food Bank invited by the Ministry and Yayasan Food Bank to be part of Food Collection and Distrib",
  //         description:"On 21st January 2020, the Ministry of Domestic Trade, Cooperatives and Consumer Affairs (KDNHEP) along with Yayasan Food. . .",
  //         image: 'assets/images/news-2.jpg',
  //         date: 'May 2, 2025'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Technology',
  //     content: [
  //       {
  //         title: 'AI Breakthrough Announced',
  //         shortdesc:"D1 Food Bank invited by the Ministry and Yayasan Food Bank to be part of Food Collection and Distrib",
  //         description:"On 21st January 2020, the Ministry of Domestic Trade, Cooperatives and Consumer Affairs (KDNHEP) along with Yayasan Food. . .",
  //         image: 'assets/images/news-1.jpg',
  //         date: 'May 5, 2025'
  //       },
  //       {
  //         title: 'AI Destina Announced',
  //         shortdesc:"D1 Food Bank invited by the Ministry and Yayasan Food Bank to be part of Food Collection and Distrib",
  //         description:"On 21st January 2020, the Ministry of Domestic Trade, Cooperatives and Consumer Affairs (KDNHEP) along with Yayasan Food. . .",
  //         image: 'assets/images/news-1.jpg',
  //         date: 'May 5, 2025'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Hope For Mankind',
  //     content: [
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"D1 Food Bank invited by the Ministry and Yayasan Food Bank to be part of Food Collection and Distrib",
  //         description:"On 21st January 2020, the Ministry of Domestic Trade, Cooperatives and Consumer Affairs (KDNHEP) along with Yayasan Food. . .",
  //         date: 'May 5, 2025'
  //       },
  //       {
  //         title: 'AI Destina Announced',
  //         shortdesc:"D1 Food Bank invited by the Ministry and Yayasan Food Bank to be part of Food Collection and Distrib",
  //         description:"On 21st January 2020, the Ministry of Domestic Trade, Cooperatives and Consumer Affairs (KDNHEP) along with Yayasan Food. . .",
  //         image: 'assets/images/news-1.jpg',
  //         date: 'May 5, 2025'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Sponsorship',
  //     content: [
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Youth Chess Tournament Empowers Minds at Lotus Pusat Bandar Puchong",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //       {
          
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-1.jpg',
  //         shortdesc:"Destina1 International Sponsors CLUB CHAMPIONSHIP 2024: A Royal Match at Royal Seri Menanti Golf & C",
  //         description:" Destina1 International was honored to sponsor the prestigious CLUB CHAMPIONSHIP 2024, held on the 5th and 6th of Octob. . .",
  //         date: 'May 5, 2025'
          
  //       },
  //       {
          
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-1.jpg',
  //         shortdesc:"Destina1 International Sponsors the 38th Men and 31st Ladies Negeri Sembilan Amateur Open",
  //         description:" Destina1 International had the esteemed privilege of sponsoring the prestigious 38th Men's and 31st Ladies Negeri Sembi.",
  //         date: 'May 5, 2025'
          
  //       }, 
  //       {
  //             title: 'FEED TO SAVE Announced',
  //             image: 'assets/images/news-1.jpg',
  //             shortdesc:" Destina 1 Welcomes Our VVIP User Dato' Mohandas Nagappan The Second Malaysian to Conquer Mount Evere",
  //             description:"We are honored to welcome Dato' Mohanadas Nagappan, the second Malaysian to conquer Mount Everest, as a VVIP user of Des",
  //             date: 'May 5, 2025'
  //           },
  //           {
  //             title: 'FEED TO SAVE Announced',
  //             image: 'assets/images/news-2.jpg',
  //             shortdesc:" Destina 1 Welcomes Our VVIP User Dato' Mohandas Nagappan The Second Malaysian to Conquer Mount Evere",
  //             description:"We are honored to welcome Dato' Mohanadas Nagappan, the second Malaysian to conquer Mount Everest, as a VVIP user of Des",
  //             date: 'May 5, 2025'
  //           },
       
  //           {
  //             title: 'FEED TO SAVE Announced',
  //             image: 'assets/images/news-2.jpg',
  //             shortdesc:"Youth Chess Tournament Empowers Minds at Lotus Pusat Bandar Puchong",
  //             description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //             date: 'May 5, 2025'
  //           },
  //           {
              
  //             title: 'FEED TO SAVE Announced',
  //             image: 'assets/images/news-1.jpg',
  //             shortdesc:"Destina1 International Sponsors CLUB CHAMPIONSHIP 2024: A Royal Match at Royal Seri Menanti Golf & C",
  //             description:" Destina1 International was honored to sponsor the prestigious CLUB CHAMPIONSHIP 2024, held on the 5th and 6th of Octob. . .",
  //             date: 'May 5, 2025'
              
  //           }
  //         ]
  //   }, 
  //   {
  //     title: 'VVIP Product Users',
  //     content: [
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Youth Chess Tournament Empowers Minds at Lotus Pusat Bandar Puchong",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //         {
  //           title: 'FEED TO SAVE Announced',
  //           image: 'assets/images/news-2.jpg',
  //           shortdesc:"Mr. Thiwakaran Muagan Wins Leadership Excellence Award at Titan Business Leadership Awards 202",
  //           description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //           date: 'May 5, 2025'
  //         },
  //         {
  //           title: 'FEED TO SAVE Announced',
  //           image: 'assets/images/news-2.jpg',
  //           shortdesc:" Madam Nithiya Karunakaran Honored with the Inspirational Icon Award at Titan Business Leadership Awa",
  //           description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //           date: 'May 5, 2025'
  //         }, {
  //           title: 'FEED TO SAVE Announced',
  //           image: 'assets/images/news-2.jpg',
  //           shortdesc:"Destina1 International Earns Global Recognition at Titan Business Leadership Awards 2025",
  //           description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //           date: 'May 5, 2025'
  //         }, {
  //           title: 'FEED TO SAVE Announced',
  //           image: 'assets/images/news-2.jpg',
  //           shortdesc:"Destina1 International Achieves Historic Success at the 2025 PGA Show in Orlando!",
  //           description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //           date: 'May 5, 2025'
  //         },
  //     ]
  //   },
  //    { 
  //     title: 'FLASH NEWS',
  //    content: [
  //     {
  //       title: 'FEED TO SAVE Announced',
  //       image: 'assets/images/news-2.jpg',
  //       shortdesc:"Youth Chess Tournament Empowers Minds at Lotus Pusat Bandar Puchong",
  //       description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //       date: 'May 5, 2025'
  //     },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Mr. Thiwakaran Muagan Wins Leadership Excellence Award at Titan Business Leadership Awards 202",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:" Madam Nithiya Karunakaran Honored with the Inspirational Icon Award at Titan Business Leadership Awa",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Destina1 International Earns Global Recognition at Titan Business Leadership Awards 2025",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Destina1 International Achieves Historic Success at the 2025 PGA Show in Orlando!",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //    ]          
  //   },
  //    {
  //      title: 'Destina Website Launchin',
  //      content: [ 
  //     {
  //       title: 'FEED TO SAVE Announced',
  //       image: 'assets/images/news-2.jpg',
  //       shortdesc:"Youth Chess Tournament Empowers Minds at Lotus Pusat Bandar Puchong",
  //       description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //       date: 'May 5, 2025'
  //     },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Mr. Thiwakaran Muagan Wins Leadership Excellence Award at Titan Business Leadership Awards 202",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:" Madam Nithiya Karunakaran Honored with the Inspirational Icon Award at Titan Business Leadership Awa",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Destina1 International Earns Global Recognition at Titan Business Leadership Awards 2025",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Destina1 International Achieves Historic Success at the 2025 PGA Show in Orlando!",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //     ]      
  //     },
  //     {title: 'Festival Wishes',
  //     content: [ {
  //       title: 'FEED TO SAVE Announced',
  //       image: 'assets/images/news-2.jpg',
  //       shortdesc:"Youth Chess Tournament Empowers Minds at Lotus Pusat Bandar Puchong",
  //       description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //       date: 'May 5, 2025'
  //     },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Mr. Thiwakaran Muagan Wins Leadership Excellence Award at Titan Business Leadership Awards 202",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:" Madam Nithiya Karunakaran Honored with the Inspirational Icon Award at Titan Business Leadership Awa",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Destina1 International Earns Global Recognition at Titan Business Leadership Awards 2025",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Destina1 International Achieves Historic Success at the 2025 PGA Show in Orlando!",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //     ]
  //     },
  //     {title: 'Events',
  //     content: [{
  //       title: 'FEED TO SAVE Announced',
  //       image: 'assets/images/news-1.jpg',
  //       shortdesc:"Destina1 International Achieves Historic Success at the 2025 PGA Show in Orlando!",
  //       description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //       date: 'May 5, 2025'
  //     },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Mr. Thiwakaran Muagan Wins Leadership Excellence Award at Titan Business Leadership Awards 202",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:" Madam Nithiya Karunakaran Honored with the Inspirational Icon Award at Titan Business Leadership Awa",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-1.jpg',
  //         shortdesc:"Destina1 International Earns Global Recognition at Titan Business Leadership Awards 2025",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Destina1 International Achieves Historic Success at the 2025 PGA Show in Orlando!",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //     ]      
  //     },
  //     {title: 'Festival Wishes',
  //     content: [ {
  //       title: 'FEED TO SAVE Announced',
  //       image: 'assets/images/news-2.jpg',
  //       shortdesc:"Youth Chess Tournament Empowers Minds at Lotus Pusat Bandar Puchong",
  //       description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //       date: 'May 5, 2025'
  //     },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-1.jpg',
  //         shortdesc:"Mr. Thiwakaran Muagan Wins Leadership Excellence Award at Titan Business Leadership Awards 202",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },
  //       {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:" Madam Nithiya Karunakaran Honored with the Inspirational Icon Award at Titan Business Leadership Awa",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-2.jpg',
  //         shortdesc:"Destina1 International Earns Global Recognition at Titan Business Leadership Awards 2025",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       }, {
  //         title: 'FEED TO SAVE Announced',
  //         image: 'assets/images/news-1.jpg',
  //         shortdesc:"Destina1 International Achieves Historic Success at the 2025 PGA Show in Orlando!",
  //         description:"Destina1 Sports, an initiative under Destina1 International, successfully organized a Youth Chess Tournament on 3rd May . . .",
  //         date: 'May 5, 2025'
  //       },]
  //    }
     
  // ]
  

  // selectTab(index: number) {
  //   this.activeTabIndex = index;
  // }

  // ngOnInit(): void {
    //api shoud return arreya
   /// this.newsSet = res
    
  


