import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng.component.html',
  styleUrls: ['./ng.component.css'] // Corrected "styleUrl" to "styleUrls"
})
export class NgComponent {
  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  isStyled: boolean = false;

  toggleStyles() {
    this.isStyled = !this.isStyled;
  }

  isHighlighted: boolean = false;

  toggleState() {
    this.isHighlighted = !this.isHighlighted;
  }

  isPrimary: boolean = true;

  toggleArrayClasses() {
    this.isPrimary = !this.isPrimary;
  }
}
