import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile, user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  //register method to signup users. username is not by default in firebase auth. So, we updated the profile to accept username
  register(email: string, username: string, password: string): Observable<void>{
    const promise = this.auth.createUserWithEmailAndPassword(email, password)
    .then(async (usercredential) => {
      if(usercredential.user){
        await usercredential.user.updateProfile({displayName: username});
      }
    });

    return from(promise)
    
  }
}
