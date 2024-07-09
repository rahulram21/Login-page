import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { getAuth, provideAuth} from '@angular/fire/auth'
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';

const firebaseConfig = {
  apiKey: "AIzaSyDsuDzV2KqibEgiTGygms6TC8ufjD3nF3Q",
  authDomain: "angular-login-9717e.firebaseapp.com",
  projectId: "angular-login-9717e",
  storageBucket: "angular-login-9717e.appspot.com",
  messagingSenderId: "112304291608",
  appId: "1:112304291608:web:739b9b727b1bc643d2686d"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
