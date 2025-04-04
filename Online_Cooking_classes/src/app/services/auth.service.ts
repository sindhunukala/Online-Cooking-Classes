import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<any>(null);
  private apiUrl = 'http://localhost:5000/api/auth/login'; // Adjust this if needed

  constructor(private http: HttpClient, private router: Router) { // ✅ Inject Router
    this.loadUserFromToken(); // Load user from stored token on refresh
  }

  // Load user from stored token
  private loadUserFromToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.user.next(jwtDecode(token));
    }
  }

  // Login function
  login(credentials: any): Observable<any> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        this.user.next(jwtDecode(res.token));
      })
    );
  }

  // Get the current user as an observable
  getUser(): Observable<any> {
    return this.user.asObservable();
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Returns true if token exists
  }

  // Logout function
  logout() {
    localStorage.removeItem('token');
    this.user.next(null);
    this.router.navigate(['/login']);
  }
}