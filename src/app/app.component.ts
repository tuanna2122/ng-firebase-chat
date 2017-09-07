import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire4/database';
import { AngularFireAuth } from 'angularfire4/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  msgVal: string = '';

  displayName: string = '';

  constructor(public afDb: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.items = this.afDb.list('/messages', {
      query: {
        limitToLast: 5
      }
    });

    this.user = this.afAuth.authState;
    this.user.subscribe(user => {
      if (user.uid) {
        this.displayName = user.displayName;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  chatSend(theirMessage: string) {
    this.items.push({
      message: theirMessage,
      name: this.displayName
    });
    this.msgVal = '';
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
