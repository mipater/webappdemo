import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import { IaTestComponent } from './ia-test/ia-test.component';
import { FooterComponent } from './footer/footer.component';
import { InformativaComponent } from './informativa/informativa.component';
import { HometestComponent } from './ia-test/hometest/hometest.component';
import { StepwizardComponent } from './ia-test/stepwizard/stepwizard.component';
import {SafeHtmlPipe} from './shared/safe-html-pipe';
import { CookieComponent } from './cookie/cookie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    IaTestComponent,
    FooterComponent,
    InformativaComponent,
    HometestComponent,
    StepwizardComponent,
    SafeHtmlPipe,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ArchwizardModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
