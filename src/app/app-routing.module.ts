import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import {ErrorPageComponent} from './main/error-page/error-page.component';
import {IaTestComponent} from './main/ia-test/ia-test.component';
import {InformativaComponent} from './main/informativa/informativa.component';


const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'privacy', component: InformativaComponent},
  {path: 'test', component: IaTestComponent},
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