import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:5000/api/courses'; // Adjust API URL as needed

  constructor(private http: HttpClient) {}

  // Fetch all courses
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl, { responseType: 'json' });
  }

  // Fetch a single course by ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(${this.apiUrl}/${id}, { responseType: 'json' });
  }

  // Create a new course
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course, { responseType: 'json' });
  }

  // Update an existing course
  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(${this.apiUrl}/${id}, course, { responseType: 'json' });
  }

  // Delete a course
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(${this.apiUrl}/${id}, { responseType: 'json' });
  }
}