import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { GroceriesApiService } from './service/groceries-api/groceries-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: "AIzaSyC-3xVuhLZNL3tcA_TWcsCdKqUjZ6JV41k",
  authDomain: "groceries-tracker-c2ed0.firebaseapp.com",
  databaseURL: "https://groceries-tracker-c2ed0.firebaseio.com",
  projectId: "groceries-tracker-c2ed0",
  storageBucket: "groceries-tracker-c2ed0.appspot.com",
  messagingSenderId: "757289497285",
  appId: "1:757289497285:web:590da8ef1ad5e336c8b6ac",
  measurementId: "G-RR0J2YTF6Y"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    GroceriesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
