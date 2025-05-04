import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated=false;

  constructor() { }
  
  login(username: string,password: string): Promise<boolean>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(username==='admin' && password==='password'){
          this.isAuthenticated=true;
          resolve(true);
        }else{
          reject('Invalid username or password');
        }
      }, 2000);
    });
  }
  isLoggedIn():boolean{
    return this.isAuthenticated;
  }

  logout(){
    this.isAuthenticated=false;
  }
}
