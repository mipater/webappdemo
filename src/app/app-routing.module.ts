import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {IaTestComponent} from './ia-test/ia-test.component';
import {InformativaComponent} from './informativa/informativa.component';
import {HometestComponent} from './ia-test/hometest/hometest.component';
import {StepwizardComponent} from './ia-test/stepwizard/stepwizard.component';
import {CookieComponent} from './cookie/cookie.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'privacy', component: InformativaComponent},
  {path: 'cookies', component: CookieComponent},
  {path: 'test', component: IaTestComponent, children: [
      {path: '', component: HometestComponent},
      {path: 'wizard', component: StepwizardComponent}
    ]},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
