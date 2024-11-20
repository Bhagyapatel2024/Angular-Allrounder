import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  productName: string = ''; // Bind this to product name
  productCategory: string = ''; // Bind this to category
  productPrice: number | null = null; // Bind this to price
  isAvailable: boolean = false; // Bind this to availability toggle
  isProductNameValid: boolean = true; // Validation flag

  // Categories for dropdown
  categories: string[] = ['Electronics', 'Clothing', 'Books', 'Groceries'];

  // Validate product name input
  validateProductName(): void {
    this.isProductNameValid = this.productName.trim().length > 0;
  }
}
