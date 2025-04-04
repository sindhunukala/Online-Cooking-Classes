import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent { courses = [
  { id: 1, name: 'Italian Cooking', description: 'Learn to make authentic Italian dishes.' },
  { id: 2, name: 'Baking Basics', description: 'Master the art of baking cakes and pastries.' },
  { id: 3, name: 'Vegan Meals', description: 'Cook delicious vegan meals for a healthy lifestyle.' }
];

}
