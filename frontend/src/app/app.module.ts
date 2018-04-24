import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthBoxComponent } from '../components/auth-box/auth-box.component';
import { Api, User } from '../providers/providers';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { routing } from './app.routing';

import { HomePageComponent } from '../pages/home/home.component';
import { LoginPageComponent } from '../pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthBoxComponent,

    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    Api,
    User,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
