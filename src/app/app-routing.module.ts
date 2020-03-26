import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import {ErrorPageComponent} from './main/error-page/error-page.component';
import {IaTestComponent} from './main/ia-test/ia-test.component';
import {InformativaComponent} from './main/informativa/informativa.component';
import {Question1Component} from './main/ia-test/question1/question1.component';
import {HometestComponent} from './main/ia-test/hometest/hometest.component';
import {CanDeactivateGuard} from './main/ia-test/can-deactivate-guard.service';


const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'privacy', component: InformativaComponent},
  {path: 'test', canDeactivateChild: [CanDeactivateGuard], component: IaTestComponent, children: [
      {path: '', component: HometestComponent},
      {path: '1', component: Question1Component},
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
