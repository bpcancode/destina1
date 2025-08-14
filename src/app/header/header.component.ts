import { CommonModule } from '@angular/common';
import { Component ,HostListener} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isDropdownOpen = false;
toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  showDropdown() {
    this.isDropdownOpen = true;
  }

  hideDropdown() {
    this.isDropdownOpen = false;
  }
  isAboutDropdownOpen = false;

toggleAboutDropdown(event: Event) {
  event.preventDefault();
  this.isAboutDropdownOpen = !this.isAboutDropdownOpen;
}

showAboutDropdown() {
  this.isAboutDropdownOpen = true;
}

hideAboutDropdown() {
  this.isAboutDropdownOpen = false;
}
isBrandDropdownOpen = false;

toggleBrandDropdown(event: Event) {
  event.preventDefault();
  this.isBrandDropdownOpen = !this.isBrandDropdownOpen;
}

showBrandDropdown() {
  this.isBrandDropdownOpen = true;
}

hideBrandDropdown() {
  this.isBrandDropdownOpen = false;
}

isHelpDropdownOpen = false;

  // toggleHelpDropdown() {
  //   this.isHelpDropdownOpen = !this.isHelpDropdownOpen;
  // }
// isHelpDropdownOpen = false;

// showHelpDropdown() {
//   this.isHelpDropdownOpen = true;
// }

// hideHelpDropdown() {
//   this.isHelpDropdownOpen = false;
// }

toggleHelpDropdown(event: MouseEvent) {
  event.preventDefault();
  this.isHelpDropdownOpen = !this.isHelpDropdownOpen;
}


}
