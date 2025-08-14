import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
historySections = [
    {
      title: 'Founding and Early Years',
      description: "Destina1 International was founded by Dato' Sri Dr Barani Karunakaran & Prof Dr Karunakaran in 2012..."
    },
    {
      title: 'Growth and Expansion',
      description: "Destina1 International experienced a substantial increase..."
    },
    {
      title: 'Global Expansion',
      description: "The company became international in 2015..."
    },
    {
      title: 'Products',
      description: "Destina1's product line has expanded to include many goods..."
    },
    {
      title: 'Business Model',
      description: "Destina1's business model is based on direct selling..."
    }
  ];
}


