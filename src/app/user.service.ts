import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireObject } from '@angular/fire/database';
import firebase from "firebase/app";
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private dB:AngularFireDatabase) { }

  save(user:firebase.User){
    this.dB.object('/users/' +user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }
  get(uid: string): AngularFireObject<AppUser> {
    return this.dB.object('/users/' + uid);
}
}
