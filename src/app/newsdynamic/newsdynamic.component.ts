import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from '../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsdynamic',
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './newsdynamic.component.html',
  styleUrl: './newsdynamic.component.scss'
})
export class NewsdynamicComponent implements OnInit {
@ViewChild('newsCarouselRef') newsCarouselRef!: NgbCarousel;

  groupedNewsItems: any[][] = [];
  currentNewsSlide = 0;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews().subscribe({
      next: (response) => {
        const news = (response.newslist || []).slice(0, 6).map((item: any) => ({
          image: `https://admin.destina1.com/FileUpload/News/${item.imagename}`,
          title: item.title,
          text: item.descr
        }));

        this.groupedNewsItems = this.chunkArray(news, 3); // 2 groups of 3
      },
      error: (err) => {
        console.error('Failed to load news:', err);
      }
    });
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  onNewsSlide(event: any): void {
    const currentId = event.current;
    const match = currentId.match(/news-slide-(\d+)/);
    if (match) {
      this.currentNewsSlide = +match[1];
    }
  }
}

