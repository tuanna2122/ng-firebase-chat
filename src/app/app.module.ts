import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire4';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire4/database';
import { AngularFireAuthModule } from 'angularfire4/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA5KYIlmQwZoC1qmbWBfNDx_XDoY4mB7Sc",
  authDomain: "mychatapp-6de6f.firebaseapp.com",
  databaseURL: "https://mychatapp-6de6f.firebaseio.com",
  //projectId: "mychatapp-6de6f",
  storageBucket: "",
  messagingSenderId: "396722560155"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
