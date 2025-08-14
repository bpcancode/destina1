import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
   @Input() countryCode: string = 'MY';
   supportEmail = 'support@destina1global.com';
   socialLinks = [
    {
      url: 'https://www.instagram.com/destina1international/',
      iconClass: 'fab fa-instagram'
    },
    {
      url: 'https://www.facebook.com/Destina1int/',
      iconClass: 'fab fa-facebook-f'
    },
    {
      url: 'https://twitter.com/Destina1Main',
      iconClass: 'fab fa-twitter'
    },
    {
      url: 'https://www.youtube.com/@Destina1TV/videos',
      iconClass: 'fab fa-youtube'
    },
    {
      url: 'https://www.linkedin.com/company/destina1-international/mycompany/',
      iconClass: 'fab fa-linkedin'
    },
    {
      url: 'https://www.tiktok.com/@d1global',
      iconClass: 'fab fa-tiktok'
    }
  ];
   contactBoxes = [
    {
      icon: 'far fa-comment-dots',
      title: 'Contact Us',
      description: 'Our support team is here to help by phone or email.',
      link: '/contact'
    },
    {
      icon: 'far fa-handshake',
      title: 'D1PROMISE',
      description: 'Satisfaction will always be our goal, and protection—our promise.',
      link: '/'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Start a Business',
      description: 'Sell quality products that people use every day.',
      link: '/start-a-business'
    }
  ];
}
