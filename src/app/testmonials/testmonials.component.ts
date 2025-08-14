import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-testmonials',
  imports: [CommonModule],
  templateUrl: './testmonials.component.html',
  styleUrl: './testmonials.component.scss'
})
export class TestmonialsComponent implements OnInit {
  http = inject(HttpClient);
  testimonials = [
    { image: 'assets/images/0.jpg', link: '#full-of-energy', title: 'full of energy' },
    { image: 'assets/images/10.jpg', link: '#army-vateran', title: 'Testimony by US Army War Veteran' },
    { image: 'assets/images/5.jpg', link: '#fibroid', title: "Madam Thilaga's fibroid testimony" },
    { image: 'assets/images/6.jpg', link: '#tan', title: "Mr.Tan's colon cancer testimony" },
    { image: 'assets/images/11.jpg', link: '#stroke', title: 'Amazing Stroke Testimony' },
    { image: 'assets/images/15.jpg', link: '#heartproblems', title: 'Great Relieve from Stroke and Heart Problems' }
  ];

  test = signal<any>({});
  testimonialEndPoint = "/testimonials";

  ngOnInit(): void {
    this.fetchTestimonials();
  }

  fetchTestimonials() {
    this.http.get<any>("https://localhost:44322" + this.testimonialEndPoint).subscribe({
      next: (res) => this.test.set(res),
      error: err => console.error(err)
    })
  }


}
