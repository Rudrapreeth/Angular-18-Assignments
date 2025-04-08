import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, firstValueFrom, Observable } from 'rxjs';

export interface User {
  name: string;
  salary: number;
  joinedDate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL='http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(delay(1000));
  }

  async getUserCount(): Promise<number> {
    try {
      const users = await firstValueFrom(this.getUsers());
      return users?.length ?? 0;
    } catch (err) {
      console.error('Failed to fetch users:', err);
      return 0;
    }
  }
}
