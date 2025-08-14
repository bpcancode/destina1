import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  isCollapsed = true;

  countryList = [
    {
      name: 'Malaysia',
      image: 'https://admin.destina1.com/images/signup/flags/Malaysia.png',
    },
    {
      name: 'India',
      image: 'https://admin.destina1.com/images/signup/flags/India.png',
    },
    {
      name: 'United States',
      image: 'https://admin.destina1.com/images/signup/flags/United States.png',
    },
    {
      name: 'Australia',
      image: 'https://admin.destina1.com/images/signup/flags/Australia.png',
    },
    {
      name: 'Canada',
      image: 'https://admin.destina1.com/images/signup/flags/Canada.png',
    },
    {
      name: 'Germany',
      image: 'https://admin.destina1.com/images/signup/flags/Germany.png',
    },
    {
      name: 'Ghana',
      image: 'https://admin.destina1.com/images/signup/flags/Ghana.png',
    },
    {
      name: 'Hong Kong',
      image: 'https://admin.destina1.com/images/signup/flags/Hong Kong.png',
    },
    {
      name: 'Indonesia',
      image: 'https://admin.destina1.com/images/signup/flags/Indonesia.png',
    },
    {
      name: 'Nigeria',
      image: 'https://admin.destina1.com/images/signup/flags/Nigeria.png',
    },
    {
      name: 'Poland',
      image: 'https://admin.destina1.com/images/signup/flags/Poland.png',
    },
    {
      name: 'Russia',
      image: 'https://admin.destina1.com/images/signup/flags/Russia.png',
    },
    {
      name: 'Singapore',
      image: 'https://admin.destina1.com/images/signup/flags/Singapore.png',
    },
    {
      name: 'South Africa',
      image: 'https://admin.destina1.com/images/signup/flags/South Africa.png',
    },
    {
      name: 'Thailand',
      image: 'https://admin.destina1.com/images/signup/flags/Thailand.png',
    },
    {
      name: 'Turkey',
      image: 'https://admin.destina1.com/images/signup/flags/Turkey.png',
    },
    {
      name: 'United Arab Emirates',
      image:
        'https://admin.destina1.com/images/signup/flags/United Arab Emirates.png',
    },
    {
      name: 'United Kingdom',
      image:
        'https://admin.destina1.com/images/signup/flags/United Kingdom.png',
    },
    {
      name: 'Brunei',
      image: 'https://admin.destina1.com/images/signup/flags/brunei.png',
    },
    {
      name: 'Cambodia',
      image: 'https://admin.destina1.com/images/signup/flags/cambodia.png',
    },
    {
      name: 'Kenya',
      image: 'https://admin.destina1.com/images/signup/flags/kenya.png',
    },
    {
      name: 'Myanmar',
      image: 'https://admin.destina1.com/images/signup/flags/myanmar.png',
    },
    {
      name: 'Namibia',
      image: 'https://admin.destina1.com/images/signup/flags/namibia.png',
    },
    {
      name: 'Philippines',
      image: 'https://admin.destina1.com/images/signup/flags/philippines.png',
    },
    {
      name: 'Taiwan',
      image: 'https://admin.destina1.com/images/signup/flags/taiwan.png',
    },
    {
      name: 'Uganda',
      image: 'https://admin.destina1.com/images/signup/flags/uganda.png',
    },
    {
      name: 'Vietnam',
      image: 'https://admin.destina1.com/images/signup/flags/vietnam.png',
    },
  ];

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
