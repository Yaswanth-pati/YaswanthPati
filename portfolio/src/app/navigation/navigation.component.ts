import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone:true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  // @Output() sectionChange = new EventEmitter<string>();

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
