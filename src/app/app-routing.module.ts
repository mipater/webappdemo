import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import {ErrorPageComponent} from './main/error-page/error-page.component';
import {IaTestComponent} from './main/ia-test/ia-test.component';
import {InformativaComponent} from './main/informativa/informativa.component';
import {HometestComponent} from './main/ia-test/hometest/hometest.component';
import {UnsavedChangesGuard} from './main/ia-test/can-deactivate-guard.service';
import {StepwizardComponent} from './main/ia-test/stepwizard/stepwizard.component';
import {EndwizardComponent} from './main/ia-test/endwizard/endwizard.component';
import {ResultComponent} from './main/ia-test/result/result.component';
import {CookieComponent} from './main/cookie/cookie.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'privacy', component: InformativaComponent},
  {path: 'cookies', component: CookieComponent},
  {path: 'test', component: IaTestComponent, children: [
      {path: '', component: HometestComponent},
      {path: 'wizard', canDeactivate: [UnsavedChangesGuard], component: StepwizardComponent},
      {path: 'end', component: EndwizardComponent},
      {path: 'result', component: ResultComponent}
    ]},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
