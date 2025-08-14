import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-discover',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {

  products = [
    {
      img: 'assets/images/1hOKcE.jpg',
      title: 'Scalar Products For Healthy Living',
      description: 'Researches shown prolonged and repeated exposure to EMF/EMR...',
    },
    {
      img: 'assets/images/2081.jpg',
      title: 'Promotes Positive Flow Of Energy',
      description: 'D1Instant Coffee Premix 5 in 1 blended specially with coffee beans...',
    },
    {
      img: 'assets/images/etyx0Z.jpg',
      title: 'Advance Scalar Energised Pendant',
      description: 'Advance Scalar Energised Pendant is made from natural minerals...',
    },
    {
      img: 'assets/images/20221.jpg',
      title: 'Advance Scalar Energised Alkaline Flask',
      description: 'Destina 1 Flask turns drinking water (pH 7) into alkaline (pH 9-10)...',
    },
  ];
}


