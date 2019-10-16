import { Component, Input } from '@angular/core';
import { Post } from './models/Post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-application';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBxLkxxVlfYUAkN69h_fTr79ORHij8GanY',
      authDomain: 'blog-application-95cf5.firebaseapp.com',
      databaseURL: 'https://blog-application-95cf5.firebaseio.com',
      projectId: 'blog-application-95cf5',
      storageBucket: 'blog-application-95cf5.appspot.com',
      messagingSenderId: '1051317425852',
      appId: '1:1051317425852:web:d48cb3abd631968520a2b9'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
