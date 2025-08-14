import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userId: string = '';
  password: string = '';
  showPassword: boolean = false;

  //constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    console.log('Login attempt:', this.userId, this.password);

    // TODO: Add real auth logic
    if (this.userId && this.password) {
      // Navigate after success (example)
      //this.router.navigate(['/dashboard']);
    } else {
      alert('Please fill in both fields.');
    }
  }
}
