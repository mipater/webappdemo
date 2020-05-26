import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsModalRef, ModalModule} from 'ngx-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';

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
import { HometestComponent } from './main/ia-test/hometest/hometest.component';
import {UnsavedChangesGuard} from './main/ia-test/can-deactivate-guard.service';

import { ConfirmLeaveComponent } from './main/confirm-leave/confirm-leave.component';
import { StepwizardComponent } from './main/ia-test/stepwizard/stepwizard.component';

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
    HometestComponent,
    ConfirmLeaveComponent,
    StepwizardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ArchwizardModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    ConfirmLeaveComponent
  ],
  providers: [BsModalRef, UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
