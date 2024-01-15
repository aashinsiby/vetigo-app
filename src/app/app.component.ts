import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vetigo';

   firebaseConfig = {
    apiKey: "AIzaSyAkVjKQNGx19ZJxp-dUNuj7U8gVtTPVzTE",
    authDomain: "vetigo-fc02e.firebaseapp.com",
    projectId: "vetigo-fc02e",
    storageBucket: "vetigo-fc02e.appspot.com",
    messagingSenderId: "255874786930",
    appId: "1:255874786930:web:3d5b5ba47e7d20a63b84eb",
    measurementId: "G-6D8SCWYTHR"
  };
  
  // Initialize Firebase
   app = initializeApp(this.firebaseConfig);
   analytics = getAnalytics(this.app);
}
