// lib/auth.ts
export interface User {
  id: string;
  email: string;
  password: string;
  accessCode: string;
  createdAt: string;
  tier: 'premium' | 'basic';
}

const USERS_STORAGE_KEY = 'sea_smart_users';

export class AuthManager {
  static getUsers(): User[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(USERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  static saveUsers(users: User[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }

  static generateCredentials(): { email: string; password: string; accessCode: string } {
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substr(2, 4);
    
    return {
      email: `student${timestamp}@sea-smart.ai`,
      password: `mojo${randomSuffix}`,
      accessCode: `SEA${timestamp.toString().slice(-6)}`
    };
  }

  static createUser(tier: 'premium' | 'basic' = 'premium'): User {
    const credentials = this.generateCredentials();
    const users = this.getUsers();
    
    const newUser: User = {
      id: Date.now().toString(),
      email: credentials.email,
      password: credentials.password,
      accessCode: credentials.accessCode,
      createdAt: new Date().toISOString(),
      tier
    };

    users.push(newUser);
    this.saveUsers(users);
    
    return newUser;
  }

  static validateUser(email: string, accessCode: string): User | null {
    const users = this.getUsers();
    return users.find(user => 
      user.email === email && user.accessCode === accessCode
    ) || null;
  }

  static getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('current_user');
    return stored ? JSON.parse(stored) : null;
  }

  static setCurrentUser(user: User): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('current_user', JSON.stringify(user));
  }

  static logout(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('current_user');
  }
}
