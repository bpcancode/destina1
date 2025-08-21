import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  isCollapsed = true;

  countries: any = inject(RegisterService).getCountries();

  selectedCountry = '';

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  selectCountry(country: string) {
    this.selectedCountry = country;
  }

  trackByIndex(index: number, item: any): number {
    return index;
    window.scrollTo(0, 0)

  }
    
}
