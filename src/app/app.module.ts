import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {FooterComponent} from './footer/footer.component';
import {InformativaComponent} from './informativa/informativa.component';
import {CookieComponent} from './cookie/cookie.component';
import {SupplementsTestModule} from './supplements-test/supplements-test.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    FooterComponent,
    InformativaComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SupplementsTestModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
