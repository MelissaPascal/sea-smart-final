// lib/auth.ts - Super simple static password system
export class SimpleAuth {
  // Static credentials that everyone gets
  static readonly STUDENT_EMAIL = "student@sea-smart.ai";
  static readonly STUDENT_PASSWORD = "mojo2024";
  static readonly ACCESS_CODE = "SEA2024";

  static validateLogin(email: string, accessCode: string): boolean {
    return email.trim().toLowerCase() === this.STUDENT_EMAIL.toLowerCase() && 
           accessCode.trim() === this.ACCESS_CODE;
  }

  static setLoggedIn(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sea_smart_logged_in', 'true');
    }
  }

  static isLoggedIn(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('sea_smart_logged_in') === 'true';
  }

  static logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sea_smart_logged_in');
    }
  }
}
