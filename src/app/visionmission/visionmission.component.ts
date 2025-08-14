import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-visionmission',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './visionmission.component.html',
  styleUrl: './visionmission.component.scss'
})
export class VisionmissionComponent {

}
