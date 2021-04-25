import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_KEY = "ff39ec2d7b9c50c87b9ed88137034e";



  public getToken(){
   return this.API_KEY;
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    console.log(token)
    // return a boolean reflecting 
    // whether or not the token is expired
    return true;
  }
}
