import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faqs',
  standalone:true,
  imports: [NgbNavModule,CommonModule,NgbAccordionModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  selectedTab: string = 'd1';

  d1PendantFAQs = [
    {
      title: '1. What is the D1 Pendant?',
      content: `<p>The D1 Pendant is a powerful tool that helps ...</p>`,
      open: false
    },
    {
      title: '2. How do I use the D1 Pendant?',
      content: `<p>Simply wear it around your neck or keep it close ...</p>`,
      open: false
    },
    {
       title: '3.  Can I replace a broken D1 pendant ?',
      content: `<p> Yes. Gather all the broken pieces and bring back to the original place of purchase together with the Authencity Card which matches the serial number on the pendant and a hologram sticker on it with a small replacement fee. You are responsible for all the shipping costs.
 ...</p>`,
      open: false
    },
     {
      title: '4. How do I use it?',
      content: `<p>You can drink it, spray it on your skin, or use ...</p>`,
      open: false
    },
     {
      title: '4. How   What are the symptoms of healing crisis? ',
      content: `<p>You can drink it, spray it Any discomfort such as discharge from ears and eyes, rashes, aches and pains, sleepiness/fatigue, diarrhoea. *Note that healing crisis may not necessarily result from the use of the pendant ,it may be caused by other factors.
        your skin, or use ...</p>`,
      open: false
    },
     {
      title: '2. How do I use it?',
      content: `<p>You can drink it, spray it on your skin, or use ...</p>`,
      open: false
    },
  
     
    // Add more
  ];

  energizingWaterFAQs = [
    {
      title: '1. What is Energizing Water?',
      content: `<p>Energizing Water is infused with ...</p>`,
      open: false
    },
    {
      title: '2. How do I use it?',
      content: `<p>You can drink it, spray it on your skin, or use ...</p>`,
      open: false
    },
    {
      title:'3.  What other usages are there using the pendant?',
      content: '<p>Acts as an anti-inflammatory place the pendant on the targeted area for 20-30 minutes and you may experience some changes depending on the individual or put the pendant in a zip lock and place it in the bath tub for 15-20 minutes </p>',

 open: false
    },
     {
      title: '4. How do I use it?',
      content: `<p>You can drink it, spray it on your skin, or use ...</p>`,
      open: false
    },
     {
      title: '4. How   What are the symptoms of healing crisis? ',
      content: `<p>You can drink it, spray it Any discomfort such as discharge from ears and eyes, rashes, aches and pains, sleepiness/fatigue, diarrhoea. *Note that healing crisis may not necessarily result from the use of the pendant ,it may be caused by other factors.
        your skin, or use ...</p>`,
      open: false
    },
  
    

    // Add more
  ];

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  toggle(item: any): void {
    item.open = !item.open;
  }
}
