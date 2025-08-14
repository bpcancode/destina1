import { Component } from '@angular/core';
import {  computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { AsyncPipe } from '@angular/common';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-newsdetails',
  standalone:true,
  imports: [],
  templateUrl: './newsdetails.component.html',
  styleUrl: './newsdetails.component.scss'
})
export class NewsdetailsComponent implements OnInit  {
 private route = inject(ActivatedRoute);
  slugId = signal<string | null>(this.route.snapshot.paramMap.get('slugId'));

  newsService = inject(NewsService);

  news = signal<any>({});

  // imagePath = computed(() => this.news().imagename
  //               ? 'https://admin.destina1.com/FileUpload/News/${this.news().imagename}'
  //               : 'https://destina1.com/newsimages/default-news.jpg')
   imagePath = computed(() => 
    this.news().imagename 
      ? `https://admin.destina1.com/FileUpload/News/${this.news().imagename}`
      : 'https://destina1.com/newsimages/default-news.jpg' // Default image if no imagename is found
  );

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      {
        next: res => {
          console.log(res)
          const newslist = res.newslist;
          const news = newslist.find((x: any) => x.slugUrl === this.slugId());
          console.log(news);
          this.news.set(news);
        }
      }
    );
    window.scrollTo(0, 0)
  }
}
