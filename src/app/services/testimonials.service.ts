import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { endpoints } from '../../constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  apiService = inject(ApiService);

  getTestimonials<T>(params: TestimonialsService) {
    return this.apiService.get<T>(endpoints.testimonials, params);
  }

}
