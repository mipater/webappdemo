import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './main/header/header.component';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './main/home/home.component';
import {ErrorPageComponent} from './main/error-page/error-page.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { IaTestComponent } from './main/ia-test/ia-test.component';
import { FooterComponent } from './main/footer/footer.component';
import { InformativaComponent } from './main/informativa/informativa.component';
import { Question1Component } from './main/ia-test/question1/question1.component';
import { HometestComponent } from './main/ia-test/hometest/hometest.component';
import {CanDeactivateGuard} from './main/ia-test/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    ErrorPageComponent,
    IaTestComponent,
    FooterComponent,
    InformativaComponent,
    Question1Component,
    HometestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
