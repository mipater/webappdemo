import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {InformativaComponent} from './informativa/informativa.component';
import {CookieComponent} from './cookie/cookie.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'privacy', component: InformativaComponent},
  {path: 'cookies', component: CookieComponent},
  {path: 'supplements-test', loadChildren: () => import('./supplements-test/supplements-test.module').then(m => m.SupplementsTestModule)},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
