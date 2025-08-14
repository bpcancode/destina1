import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  hqContacts = [
    {
      icon: 'fas fa-phone',
      title: 'Phone :',
      detail: '+603 - 5888 7789, +603 - 8600 4650, +603 8600 4651'
    },
    {
      icon: 'fas fa-fax',
      title: 'Fax :',
      detail: ''
    },
    {
      icon: 'fas fa-phone',
      title: 'Whatsapp/Telegram Support :',
      detail: ''
    },
    {
      icon: 'fas fa-map',
      title: 'Address :',
      detail: 'Suite: F-3-3 & F-3A-3, Setiawalk, Persiaran Wawasan, Pusat Bandar Puchong, 47160 Puchong, Selangor, Darul Ehsan, Malaysia'
    },
    {
      icon: 'fas fa-clock',
      title: 'Open From :',
      detail: 'Monday - To - Saturday'
    },
    {
      icon: 'fas fa-clock',
      title: 'Operating Hours :',
      detail: '10:30 AM - 08:00 PM'
    }
  ];

  supportContacts = [...this.hqContacts]; // If both sections are the same

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
